import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    toplam:(state,action)={

    },
    cixma:(state,action)={

    },
    vurma:(state,action)={

    },
    bolme:(state,action)={

    },



  },
})

export const { toplam, cixma, vurma,bolme} = calculatorSlice.actions

export default calculatorSlice.reducer