import { Box } from "@mui/material";
import { ReactNode } from "react";


interface TemplatePageProps {
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
}

export const TemplatePage = ( {header, content, sidebar}: TemplatePageProps ) => (
    <>
        {header}
        {content}
        {sidebar}
    </>
);