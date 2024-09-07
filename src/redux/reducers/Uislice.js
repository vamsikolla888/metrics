import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import showToaster from "../../common/toast/CommonToast";

export const DialogTypes = {
    COMMONDIALOG: "commonDialog"
}
const initialState = {
    toast: { show: false, severity: "error", message:"", life: 3000, summary: "Error"},
    sidebarIcons: [],
    dialogs: { commonDialog: false }
}

export const fetchIcons = createAsyncThunk("fetch/icons", async (obj) => {
    const Icon = await obj.icon;
    return { ...obj, Icon }
})

const Uislice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showToast: (_, action) => {
            showToaster(action.payload);
        },
        hideToast: (state) => {
            state.show = false
        },
        setItem: (state, action) => {
            console.log("AC",action);
            localStorage.setItem(action.payload.key, JSON.stringify(action.payload.value))
        },
        showDialog(state, { payload: { type = DialogTypes.COMMONDIALOG}}){
            state.dialogs[type] = true;
        },
        hideDialog(state, { payload: { type = DialogTypes.COMMONDIALOG}}) {
            state.dialogs[type] = false;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchIcons.fulfilled, (state, action) => {

            let findIcon = state?.sidebarIcons.find(icon => icon.name === action.payload.name);
            if(!findIcon) {
                console.log("FULL", action.payload);
                state.sidebarIcons.push(action.payload)
            }
        }),
        builder.addCase(fetchIcons.rejected, (state, action) => {
            console.log("ERROR")
        })
    }
})

export const { showToast, hideToast, setItem, addIcon, showDialog, hideDialog } = Uislice.actions;
export default Uislice.reducer;