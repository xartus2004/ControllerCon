'use client';
import { createTheme } from "@mui/material";
//sets the global theme for the app
const GlobalTheme = createTheme({
    palette: {
        // primary: {
        //     main: "#ff0000",
        // },
        // secondary: {
        //     main: "#0000ff",
        // },
    },
    components: {
    MuiAccordion:{
        styleOverrides: {
            root: {
                backgroundColor:"#00000010",
                border:"2px solid #72195A",
                width:"80%",
                color: "#72195A",
                margin: 'auto',
                '&.Mui-expanded': { // Target the expanded state
                    margin: 'auto', // Keep the accordion centered when expanded
                },
            },
        },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                backgroundColor: "white",
                color: "#72195A",
            },
        },
    },
    // MuiButton: {
    //     styleOverrides: {
    //         root: {
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             backgroundColor:"#00000010",
    //             border:"2px solid #72195A",
    //             color: "#72195A",
    //             margin: 'auto',
    //             '&:hover': {
    //                 backgroundColor: "#000000",
    //             },
    //         },
    //     },
    // },
    
    
    }});

    export default GlobalTheme;