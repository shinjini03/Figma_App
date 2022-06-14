import { LeftCol } from "./LeftCol";
import { RightCol } from "./RightCol";
import { WelcomeBackAndrew } from "./WelcomeBackAndrew";
import { FrameComponent } from "./FrameComponent";
import { FrameComponent1 } from "./FrameComponent1";
import { HaveALookAtTheQuickProgr } from "./HaveALookAtTheQuickProgr";
import { LiveProject } from "./LiveProject";
import { CurrentProjects } from "./CurrentProjects";
import { ProjectsThatAreCurrentlyIn } from "./ProjectsThatAreCurrentlyIn";
import { FrameComponent2 } from "./FrameComponent2";
import { FrameComponent3 } from "./FrameComponent3";
import { FrameComponent4 } from "./FrameComponent4";
import { FrameComponent5 } from "./FrameComponent5";
import { PendingInvoice } from "./PendingInvoice";
import { InvoicesThatAreCurrentlyPe } from "./InvoicesThatAreCurrentlyPe";
import { InvoiceProductCard } from "./InvoiceProductCard";
import { InvoiceProductCard1 } from "./InvoiceProductCard1";
import { InvoiceProductCard2 } from "./InvoiceProductCard2";
import { AppBar } from "./AppBar";
import "./css/WT004.css";

export const WT004 = () => {
  return (
    <div className="wt004-div">
      <LeftCol />
      <div className="line-div" />
      <div className="line-div1" />
      <RightCol />
      <WelcomeBackAndrew />
      <FrameComponent />
      <FrameComponent1 />
      <HaveALookAtTheQuickProgr />
      <LiveProject />
      <CurrentProjects />
      <ProjectsThatAreCurrentlyIn />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <PendingInvoice />
      <InvoicesThatAreCurrentlyPe />
      <InvoiceProductCard />
      <InvoiceProductCard1 />
      <InvoiceProductCard2 />
      <AppBar />
    </div>
  );
};
