// components
// components
import LoadingView from "../../../../../../shared/components/cards/Loader_ii.jsx"
import nullCard from "../../../../../../shared/components/cards/Null"
import ErrorView from '../../../../../../shared/components/cards/connectionError.tsx'
import DataErrorComponent from '../../../../../../shared/components/cards/NullData.tsx'

//types
import { OperationStatus} from "../../../../types/operationTypes.ts"

// import vVCard from "../components/cards/VerticalViewCard"
import {ItemsComponenet} from '../../details/ItemsComponenet.jsx'
// import {CategoryComponent} from '../CategoryComponent.jsx'

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

type renderItemsComponenetProps = {
  status: OperationStatus;
  payloadParams?: any;
  actions?: ActionProps;
};

const renderItemsComponenet = ({
  status,
  payloadParams,
  actions = {}
}: renderItemsComponenetProps) => {

  const componentConfig: Record<
    OperationStatus, 
    ComponentConfig<any & ActionProps>
  > = {
        idle: {
      component: nullCard,
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
      component: ItemsComponenet,
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



export { renderItemsComponenet };