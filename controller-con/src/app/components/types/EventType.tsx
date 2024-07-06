export interface ApplicationSettings {
    reqIGN: boolean;
    reqSer: boolean;
    reqTOS: boolean;
    tos?: string;
  }
  
  export interface ParticipantSettings {
    allowTitle: boolean;
    reqTitle: boolean;
    titleLabel?: string;
    allowDesc: boolean;
    reqDesc: boolean;
    descLength?: [number, number];
    allowImage: boolean;
    reqImg: boolean;
    imgLabel?: string;
    allowAdminContact: boolean;
  }
  
 export interface DisplaySettings {
    backgroundColor?: string;
    textColor: string;
    textColor2?: string;
    pic: string;
  }
  
    export interface PfEvent {
    _id: string;
    name: string;
    creator: string;
    creatorName: string;
    description: string;
    open: boolean;
    game?: string;
    loc?: string;
    time?: string;
    date?: string;
    applicationSettings: ApplicationSettings;
    participantSettings: ParticipantSettings;
    displaySettings: DisplaySettings;
    timestamps: boolean;
  }

  