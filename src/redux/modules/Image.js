import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

const SET_PREVIEW = 'SET_PREVIEW';
const DEL_PREVIEW = 'DEL_PREVIEW';
const INIT_PREVIEW = 'INIT_PREVIEW';
const EDIT_PREVIEW = 'EDIT_PREVIEW';

const setPreview = createAction(SET_PREVIEW,(preview,file)=>({preview,file}));
const delPreview = createAction(DEL_PREVIEW,(num)=>({num}));
const initPreview = createAction(INIT_PREVIEW,()=>({}));
const editPreview = createAction(EDIT_PREVIEW,(preview)=>({preview}));

const initialState ={
    preview: [],
    files: [],
    uploading: false,
    deleting: false,
}

export default handleActions({
    [SET_PREVIEW]:(state,action) => produce(state,(draft)=>{
        
        draft.files = [...draft.files, action.payload.file];

        draft.preview = [ ...draft.preview, action.payload.preview ]
        
        if(draft.preview.length === 3){ draft.uploading = true }
    }),
    [EDIT_PREVIEW]: (state,action) => produce(state,(draft)=>{
        draft.preview = [action.payload.preview]
    }),
    [DEL_PREVIEW]:(state,action) => produce(state,(draft)=>{
        const index = Number(action.payload.num);
        draft.files = draft.files.filter((f,idx)=> idx !== index);
        draft.preview = draft.preview.filter((p,idx)=> idx !== index);
        draft.uploading = false;
    }),
    [INIT_PREVIEW]:(state,action) => produce(state,(draft)=>{
        draft.files = [];
        draft.preview = [];
        draft.uploading = false
    }),
},initialState);

const actionCreators = {
    setPreview,
    delPreview,
    initPreview,
    editPreview
}

export {actionCreators}