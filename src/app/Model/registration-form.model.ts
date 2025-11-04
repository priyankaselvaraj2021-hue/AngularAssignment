export interface ResgistrationForm {
    title: string;
    fields : Fields[];
}

export interface Fields {
    name: string;
    label: string;
    type: string,
    required?: boolean,
    validation?: Pattern,
    options?: string[]
}

export interface Pattern {
    pattern: string;
    message : string;
}

export const supportedInputFieldTypes = [
    'text','email','password','date','number','tel','url'
]