#!/bin/bash
# check-compat.sh
if [ -z "$1" ]; then
  echo "Usage: $0 <package-name>"
  exit 1
fi
package=$1
echo "Fetching peer dependencies for $package..."
peer_deps=$(npm info "$package" peerDependencies --json 2>/dev/null || echo "{}")
if [ -z "$peer_deps" ] || [ "$peer_deps" = "{}" ]; then
  echo "No peer dependencies found for $package. Assuming compatibility."
  react_version="*"
  rn_version="*"
else
  react_version=$(echo "$peer_deps" | jq -r '.react // "*"')
  rn_version=$(echo "$peer_deps" | jq -r '."react-native" // "*"')
fi
latest_version=$(npm info "$package" version 2>/dev/null || echo "unknown")
echo "Latest version of $package: $latest_version"
echo "Peer dependencies:"
echo "  react: $react_version"
echo "  react-native: $rn_version"

# Hardcode known stable versions for React Native 0.79.2
declare -A stable_versions=(
  ["react-redux"]="9.1.0"
  ["@react-navigation/native"]="6.1.18"
  ["react-native-screens"]="3.34.0"
  ["react-native-safe-area-context"]="4.10.9"
  ["redux"]="5.0.1"
  ["@react-navigation/native-stack"]="6.11.0"
)

if [[ "$react_version" == "*" || "$react_version" == ">="* || "$react_version" == *18.3.1* || "$react_version" == *18* ]] && \
   [[ "$rn_version" == "*" || "$rn_version" == ">="* || "$rn_version" == *0.79.2* || "$rn_version" == *0.79* ]]; then
  if [[ -n "${stable_versions[$package]}" ]]; then
    echo "$package@${stable_versions[$package]} is a stable, compatible version for react@18.3.1 and react-native@0.79.2"
    echo "Recommended: Install $package@${stable_versions[$package]}"
    yarn add $package@${stable_versions[$package]} --exact
  else
    echo "$package@$latest_version is compatible with react@18.3.1 and react-native@0.79.2"
    echo "Recommended: Install $package@$latest_version (verify stability manually)"
    yarn add $package@$latest_version 
  fi
else
  echo "Checking for compatible version..."
  versions=$(npm info "$package" versions --json 2>/dev/null | jq -r '.[]' | tac)
  for version in $versions; do
    peer_deps=$(npm info "$package@$version" peerDependencies --json 2>/dev/null || echo "{}")
    react_version=$(echo "$peer_deps" | jq -r '.react // "*"')
    rn_version=$(echo "$peer_deps" | jq -r '."react-native" // "*"')
    if [[ "$react_version" == "*" || "$react_version" == ">="* || "$react_version" == *18.3.1* || "$react_version" == *18* ]] && \
       [[ "$rn_version" == "*" || "$rn_version" == ">="* || "$rn_version" == *0.79.2* || "$rn_version" == *0.79* ]]; then
      if [[ -n "${stable_versions[$package]}" && "$version" == "${stable_versions[$package]}" ]]; then
        echo "Stable compatible version found: $package@$version"
        yarnn add "$package@$version" --exact
      else
        echo "Compatible version found: $package@$version (prefer ${stable_versions[$package]} if available)"
        # yarnn add "$package@$version" --exact
      fi
      break
    fi
  done
fi