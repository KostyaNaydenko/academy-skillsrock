import { ReactNode } from "react";
import { TemplatePageContent, TemplatePageFooter, TemplatePageGridCards, TemplatePageHeader, TemplatePageMain, TemplatePageSidebar } from "../../Shop.styles";

interface ITemplatePageProps {
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
    footer: ReactNode;
}

export const TemplatePage = ( {header, content, sidebar, footer}: ITemplatePageProps ) => (
  <TemplatePageContent>
    <TemplatePageHeader>{header}</TemplatePageHeader>
    <TemplatePageMain>
      <TemplatePageGridCards>{content}</TemplatePageGridCards>
      <TemplatePageSidebar>{sidebar}</TemplatePageSidebar>
    </TemplatePageMain>
    <TemplatePageFooter>{footer}</TemplatePageFooter>
  </TemplatePageContent>
);