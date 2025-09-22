import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppNavbar from './components/AppNavbar';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from './theme/customizations';
import DashBoardRoutes from "./DashBoard.routes.tsx";
import {alpha} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Header from "../work-around/components/Header.tsx";

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

export default function DashBoard(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme/>
            <Box sx={{display: 'flex'}}>
                <SideMenu/>
                <AppNavbar/>
                <Box
                  component="main"
                  sx={(theme) => ({
                      flexGrow: 1,
                      backgroundColor: theme.vars
                        ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                        : alpha(theme.palette.background.default, 1),
                      overflow: 'auto',
                  })}
                >
                    <Stack
                      spacing={2}
                      sx={{
                          alignItems: 'center',
                          mx: 3,
                          pb: 5,
                          mt: { xs: 8, md: 0 },
                      }}
                    >
                        <Header />
                        <DashBoardRoutes/>
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}
