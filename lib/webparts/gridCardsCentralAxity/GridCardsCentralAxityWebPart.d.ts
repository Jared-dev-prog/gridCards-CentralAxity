import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { ICard } from "./components/IGridCardsCentralAxityProps";
export interface IGridCardsCentralAxityWebPartProps {
    description: string;
    collectionData: ICard[];
}
export default class GridCardsCentralAxityWebPart extends BaseClientSideWebPart<IGridCardsCentralAxityWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    render(): void;
    protected onInit(): Promise<void>;
    private _getEnvironmentMessage;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GridCardsCentralAxityWebPart.d.ts.map