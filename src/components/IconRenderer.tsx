import React from "react";
import {
  Terminal,
  Globe,
  MessageSquare,
  Code2,
  Database,
  Cloud,
  CodeXml,
  LucideProps,
} from "lucide-react";

export const renderPortfolioIcon = (
  iconName: string,
  props?: LucideProps,
): React.ReactElement => {
  switch (iconName) {
    case "Code2":
      return <Code2 {...props} />;
    case "Database":
      return <Database {...props} />;
    case "Cloud":
      return <Cloud {...props} />;
    case "CodeXml":
      return <CodeXml {...props} />;
    case "Terminal":
      return <Terminal {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "MessageSquare":
      return <MessageSquare {...props} />;
    default:
      return <Terminal {...props} />;
  }
};
