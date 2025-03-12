import { FedExPackage } from "./FedExPackage";
import { PackageManager } from "./PackageManager";
import { UPSPackage } from "./UPSPackage";

const packageManager = new PackageManager(true);
const ups = new UPSPackage(packageManager);
const fedex = new FedExPackage(packageManager);

ups.ship();
fedex.ship();
ups.deliver();
fedex.deliver();
