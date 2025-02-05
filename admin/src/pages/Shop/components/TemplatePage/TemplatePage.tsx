import { ReactNode } from "react";
import { TemplatePageContent, TemplatePageHeader, TemplatePageMain, TemplatePageSidebar } from "../../Shop.styles";


interface TemplatePageProps {
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
}

export const TemplatePage = ( {header, content, sidebar}: TemplatePageProps ) => (
    <>
        <TemplatePageHeader>{header}</TemplatePageHeader>
        <TemplatePageMain>
            <TemplatePageContent>{content}</TemplatePageContent>
            <TemplatePageSidebar>{sidebar}</TemplatePageSidebar>
        </TemplatePageMain>
    </>
);