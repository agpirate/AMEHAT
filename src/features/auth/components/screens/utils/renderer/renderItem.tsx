// components
import LoadingView from "../../../../../../shared/components/cards/Loader_ii.jsx"
import nullCard from "../../../../../../shared/components/cards/Null.tsx"
import ErrorView from '../../../../../../shared/components/cards/connectionError.tsx'
import DataErrorComponent from '../../../../../../shared/components/cards/NullData.tsx'

//types
import { OperationStatus} from "../../../../types/opsStatus_Setting/OpsTypes.ts"

// import vVCard from "../components/cards/VerticalViewCard"

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

const renderLatestComponent = ({
  status,
  payloadParams,
  actions = {}
}: RenderLatestComponentProps) => {

  const componentConfig: Record<
    OperationStatus, 
    ComponentConfig<any & ActionProps>
  > = {
        idle: {
      component: LoadingView,
      props: { ...actions }
    },
    loading: {
      component: LoadingView,
      props: {  }
    },
    error: {
      component: ErrorView,
      props: (error: Error) => ({ 
        error,
        ...actions 
      })
    },
    success: {
      component: ItemsComponent,
      props: (data: any) => ({
        data,
        ...actions
      })
    },
    empty: {
      component: DataErrorComponent,
      props: { ...actions }
    }
  };

  const config = componentConfig[status];
  const Component = config.component ;
  const props = typeof config.props === 'function' 
    ? config.props(payloadParams) 
    : config.props;

  return <Component {...props}  />;
};


const renderCategoryComponent = ({
  status,
  payloadParams,
  actions = {}
}: RenderLatestComponentProps) => {

  const componentConfig: Record<
    OperationStatus, 
    ComponentConfig<any & ActionProps>
  > = {
        idle: {
      component: nullCard,
      props: { ...actions }
    },
    loading: {
      component: nullCard,
      props: {  }
    },
    error: {
      component: nullCard,
      props: (error: Error) => ({ 
        error,
        ...actions 
      })
    },
    success: {
      component: CategoryComponent,
      props: (data: any) => ({
        data,
        ...actions
      })
    },
    empty: {
      component: nullCard,
      props: { ...actions }
    }
  };

  const config = componentConfig[status];
  const Component =  config.component ;
  const props = typeof config.props === 'function' 
    ? config.props(payloadParams) 
    : config.props;

  return <Component {...props}  />;
};

export { renderLatestComponent,renderCategoryComponent };