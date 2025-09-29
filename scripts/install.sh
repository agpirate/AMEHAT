#!/bin/bash
# check-compat.sh - Enhanced version for React 18.3.1 and React Native 0.75.4

if [ -z "$1" ]; then
  echo "Usage: $0 <package-name>"
  exit 1
fi

package=$1
react_target="18.3.1"
rn_target="0.75.4"

# Known stable versions for React 18.3.1 and React Native 0.75.4
declare -A stable_versions=(
  # React Native core libraries
  ["react-native-linear-gradient"]="2.8.3"
  ["react-native-safe-area-context"]="4.10.9"
  ["react-native-screens"]="3.34.0"
  ["react-native-share"]="10.2.1"
  ["react-native-vector-icons"]="10.2.0"
  ["react-native-video"]="6.4.5"
  ["react-native-webview"]="13.8.6"
  
  # Navigation
  ["@react-navigation/native"]="6.1.18"
  ["@react-navigation/bottom-tabs"]="6.6.1"
  ["@react-navigation/native-stack"]="6.11.0"
  ["@react-navigation/stack"]="6.4.1"
  ["@react-navigation/drawer"]="6.6.7"
  
  # State management
  ["@reduxjs/toolkit"]="2.2.7"
  ["react-redux"]="9.1.0"
  ["redux"]="5.0.1"
  ["zustand"]="4.5.5"
  
  # Networking
  ["axios"]="1.7.7"
  
  # Internationalization
  ["i18next"]="23.15.1"
  ["react-i18next"]="15.0.2"
  
  # UI Components
  ["react-native-elements"]="3.4.3"
  ["react-native-paper"]="5.12.3"
  ["react-native-gesture-handler"]="2.16.1"
  ["react-native-reanimated"]="3.8.0"
  
  # CLI Tools
  ["@react-native-community/cli"]="18.0.0"
  ["@react-native-community/cli-platform-android"]="18.0.0"
  ["@react-native-community/cli-platform-ios"]="18.0.0"
  
  # Testing
  ["@testing-library/react-native"]="12.4.5"
  ["jest"]="29.7.0"
)

# Extended version ranges that are known to work
declare -A extended_compatible_versions=(
  ["react-native-gesture-handler"]="2.16.1"
  ["react-native-reanimated"]="3.8.0"
  ["@react-native-async-storage/async-storage"]="1.21.0"
  ["react-native-device-info"]="10.11.0"
  ["react-native-permissions"]="3.14.0"
  ["react-native-camera"]="4.2.1"
  ["react-native-firebase"]="16.8.0"
)

echo "Checking compatibility for $package with react@$react_target and react-native@$rn_target..."

# Get package info
latest_version=$(npm info "$package" version 2>/dev/null || echo "unknown")
if [ "$latest_version" = "unknown" ]; then
  echo "Error: Package $package not found in npm registry."
  exit 1
fi

echo "Latest version of $package: $latest_version"

# Get peer dependencies
peer_deps=$(npm info "$package" peerDependencies --json 2>/dev/null || echo "{}")
if [ -z "$peer_deps" ] || [ "$peer_deps" = "{}" ]; then
  echo "No peer dependencies found for $package."
  react_version="*"
  rn_version="*"
else
  react_version=$(echo "$peer_deps" | jq -r '.react // "*"')
  rn_version=$(echo "$peer_deps" | jq -r '."react-native" // "*"')
  echo "Peer dependencies:"
  echo "  react: $react_version"
  echo "  react-native: $rn_version"
fi

# Check if version is in our known stable list
if [[ -n "${stable_versions[$package]}" ]]; then
  echo "Known stable version for react@$react_target and react-native@$rn_target:"
  echo "  $package@${stable_versions[$package]}"
  echo "Recommended command:"
  echo "  npm install $package@${stable_versions[$package]} --exact"
  exit 0
fi

# Check if version is in our extended compatibility list
if [[ -n "${extended_compatible_versions[$package]}" ]]; then
  echo "Extended compatibility version for react@$react_target and react-native@$rn_target:"
  echo "  $package@${extended_compatible_versions[$package]}"
  echo "Recommended command:"
  echo "  npm install $package@${extended_compatible_versions[$package]} --exact"
  exit 0
fi

# Check if current version is compatible
is_compatible() {
  local react_req=$1
  local rn_req=$2
  
  # Handle wildcards
  if [[ "$react_req" == "*" ]]; then return 0; fi
  if [[ "$rn_req" == "*" ]]; then return 0; fi
  
  # Handle >= requirements
  if [[ "$react_req" == ">="* ]]; then
    local min_react=${react_req:2}
    if printf '%s\n%s\n' "$react_target" "$min_react" | sort -V -C; then
      return 0
    else
      return 1
    fi
  fi
  
  if [[ "$rn_req" == ">="* ]]; then
    local min_rn=${rn_req:2}
    if printf '%s\n%s\n' "$rn_target" "$min_rn" | sort -V -C; then
      return 0
    else
      return 1
    fi
  fi
  
  # Handle exact versions
  if [[ "$react_req" == *"$react_target"* ]]; then return 0; fi
  if [[ "$rn_req" == *"$rn_target"* ]]; then return 0; fi
  
  # Handle ranges (simplified)
  if [[ "$react_req" == *"18"* ]]; then return 0; fi
  if [[ "$rn_req" == *"0.75"* ]]; then return 0; fi
  
  return 1
}

if is_compatible "$react_version" "$rn_version"; then
  echo "$package@$latest_version appears compatible with react@$react_target and react-native@$rn_target"
  echo "Recommended command:"
  npm install $package@$latest_version --exact
  exit 0
else
  echo "$package@$latest_version may not be fully compatible with react@$react_target and react-native@$rn_target"
  echo "Searching for compatible versions..."
fi

# Search through previous versions for compatibility
versions=$(npm info "$package" versions --json 2>/dev/null | jq -r '.[]' | tac)
found_compatible=false

for version in $versions; do
  # Skip pre-releases unless specifically requested
  if [[ "$version" == *"-"* ]] && [[ "$version" != "$latest_version" ]]; then
    continue
  fi
  
  peer_deps=$(npm info "$package@$version" peerDependencies --json 2>/dev/null || echo "{}")
  current_react=$(echo "$peer_deps" | jq -r '.react // "*"')
  current_rn=$(echo "$peer_deps" | jq -r '."react-native" // "*"')
  
  if is_compatible "$current_react" "$current_rn"; then
    echo "Found compatible version: $package@$version"
    echo "Recommended command:"
    npm install $package@$version --exact
    found_compatible=true
    break
  fi
done

if [ "$found_compatible" = false ]; then
  echo "Warning: No clearly compatible version found for $package with react@$react_target and react-native@$rn_target"
  echo "You may need to:"
  echo "1. Check the package's documentation for compatibility information"
  echo "2. Consider alternative packages"
  echo "3. Test carefully if you proceed with installation"
  echo ""
  echo "If you must proceed, the latest version is:"
  npm install $package@$latest_version
fi