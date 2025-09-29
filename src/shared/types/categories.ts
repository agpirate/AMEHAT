// Core Model Types
import type { 
  Language,
  Channel,
  MainProgramType,
} from '../../features/News/categories/config'; 

// export type LanguageCode = 'en' | 'ti' | 'am' | 'ar' | 'or';
// export interface LanguageCategory {
//   id: LanguageCode;
//   name: string;
//   type: string;
//   language: string;
//   logo: string;
// }
  //for Name_
  export type Region = 'north' | 'south' | 'east' | 'west' | 'international';
  
  // Global Filter State
  export interface GlobalFilterState {
    activeLanguage: Language | null;
    activeChannel: Channel | null;
    activeProgramType: MainProgramType | null;
    activeRegion: Region | null;
    userPreferences: {
      savedLanguages: Language[];
      defaultView: 'list' | 'grid';
    };
    status: 'idle' | 'loading' | 'ready' | 'error';
    error: string | null;
  }
  
  // Combined App State

  export type FilterAction =
    | { type: 'SET_LANGUAGE'; payload: Language }
    | { type: 'SET_CHANNEL'; payload: Channel }
    | { type: 'SET_PROGRAM_TYPE'; payload: MainProgramType }
    | { type: 'SET_REGION'; payload: Region }
    | { type: 'RESET_FILTERS' }
    | { type: 'LOAD_USER_PREFERENCES'; payload: Partial<GlobalFilterState['userPreferences']> }
    | { type: 'SET_STATUS'; payload: GlobalFilterState['status'] }
    | { type: 'SET_ERROR'; payload: string };