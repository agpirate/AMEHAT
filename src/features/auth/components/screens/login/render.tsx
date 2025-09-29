// components
import LoadingView from "../../../../../shared/components/cards/Loader_ii.jsx"
import nullCard from "../../../../../shared/components/cards/Null.tsx"
import ErrorView from '../../../../../shared/components/cards/connectionError.tsx'
import DataErrorComponent from '../../../../../shared/components/cards/NullData.tsx'

//types
import { OperationStatus} from "../../../types/opsStatus_Setting/OpsTypes.ts"

// import vVCard from "../components/cards/VerticalViewCard"
import SignInFeaturedComponnet from './SignInFeaturedComponnet'
import { ReactNode } from "react"

// Define types for your components and their props
type ComponentConfig<T> = {
  component: React.ComponentType<T>;
  props: T | ((params: any) => T);
};

type ActionProps = {
  onRetry?: () => void;
  onPressItem?: (index:number,item: any) => void;
  onRefresh?: () => void;
  // Add other action props as needed
};

type RenderLatestComponentProps = {
  status: OperationStatus;
  payloadParams?: any;
  actions?: ActionProps;
};

const RenderSignInFeaturedComponet = ({
  status,
  payloadParams='',
  //props
  actions = {}
}: RenderLatestComponentProps) => {

  const componentConfig: Record<
    OperationStatus, 
    ComponentConfig<any & ActionProps>
  > = {
    idle: {
      component: SignInFeaturedComponnet,
      props: (data: any) => ({
        data,
        ...actions
      })
    },
    loading: {
      component: LoadingView,
      props: (data: any) => ({data})
    },
    error: {
      component: ErrorView,
      props: (data: any) => ({
        data,
        ...actions
      })
    },
    success: {
      component: nullCard,
      props: (data: any) => ({
        data,
        ...actions
      })
    },
    empty: {
      component: ErrorView,
      props: (data: any) => ({
        data,
        ...actions
      })
    }
  };

  const config = componentConfig[status];
  const Component =  config.component ;
  const props = typeof config.props === 'function' 
    ? config.props(payloadParams) 
    : config.props;

  return <Component {...props}  />;
};


export {RenderSignInFeaturedComponet}