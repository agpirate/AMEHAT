import { StateCreator } from 'zustand';
import {  ModelActiveTypes} from '../types/modelActiveTypes';
import {  AppStore } from '../types';


export const createActiveModelSlice: StateCreator<
  AppStore,
  [],
  [],
    ModelActiveTypes
> = (set, get) => ({

  active: { type: null }, //{// type: null, draft: defaultDataItem, error: undefined },


  //actions

  initialize: (schema, defaults) => set({ schema, defaults }),

  ActiveFetchOperation: (payload: any, subOp: any) => {
    get().idelOperation('fetch')
    get().setSubOperation({ fetch: subOp ?? null })

    //------- 
  },

  setActiveDraft: (draft) => {
    draft = {...get().active.draft,...(draft ?? {})}
    get().active = { ...get().active,draft:draft}
  },

  
  setActiveItemMeta: (options={}) => {
    options = {...get().active.options,...(options ?? {})}
    get().active = { ...get().active,itemMeta:{...get().active.itemMeta,...options}}
  },
  setActiveItem: (options,draft) => {
    draft = {...get().active.draft,...(draft ?? {})}
    options = {...get().active.options,...(options ?? {})}
    get().active = {draft,options}
  },

  clearActive: () => {
    get().active = {draft:null,itemMeta:null}
    get().validation = {isValid: false,errors: {},touched: {}}
  },

  validation: {
    isValid: false,errors: {},touched: {},
  },

  validateItem: async (item) => {
    const { schema } = get();
    const errors: Record<string, string> = {};

    // Simplified validation - in a real app you'd use your schema
    // for (const [key, fieldSchema] of Object.entries(schema)) {
    //   if (fieldSchema.validationRule  && !item[key as keyof DataItem]) {
    //     errors[key] = `${key} is required`;
    //   }
    // }

    const isValid = Object.keys(errors).length === 0;
    set({ validation: { isValid, errors, touched: Object.keys(item).reduce((acc, key) => ({ ...acc, [key]: true }), {}) } });
    return { isValid, errors };
  },
});