import { CustomerInfoPage } from './01-CustomerInfoPage';
import { BusinessInfoGeneral } from './02-a-BusinessInfoGeneralPage';
import { BusinessInfoOperation } from './02-b-BusinessInfoOperationsPage';
import { BusinessInfoContactPage } from './02-c-BusinessInfoContactPage';
import { BusinessInfoDocumentPage } from './02-d-BusinessInfoDocumentPage';
import { VehicleInfoPage } from './03-VehicleInfoPage';
import { LiabilityCoveragePage } from './04-a-CoverageLiability';
import { QuotePage } from './05-QuotePage';
import { PolicyPage } from './06-PolicyPage';

export class PageManager {

    constructor(page) {

        this.customerPage =
            new CustomerInfoPage(page);

        this.businessGeneralPage =
            new BusinessInfoGeneral(page);

        this.businessOperationPage =
            new BusinessInfoOperation(page);

        this.businessContactPage =
            new BusinessInfoContactPage(page);

        this.businessDocumentPage =
            new BusinessInfoDocumentPage(page);

        this.vehiclePage =
            new VehicleInfoPage(page);

        this.liabilityCoveragePage =
            new LiabilityCoveragePage(page);

        this.quotePage =
            new QuotePage(page);

        this.policyPage =
            new PolicyPage(page);
    }
}