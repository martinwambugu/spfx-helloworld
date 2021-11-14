import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpFxHelloWorlWebPartProps {
    description: string;
}
export default class SpFxHelloWorlWebPart extends BaseClientSideWebPart<ISpFxHelloWorlWebPartProps> {
    render(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpFxHelloWorlWebPart.d.ts.map