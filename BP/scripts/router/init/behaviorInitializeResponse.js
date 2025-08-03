import { system } from "@minecraft/server";
import { BehaviorManager } from "../behaviorManager";
/**
 * アドオンの properties を参照して、ルーターに応答するためのクラス
 * propertiesの必要な部分を抜粋して、JSON.stringifyで送信します
 *
 * A class that responds to the router by referencing the addon's properties
 * Extracts the necessary parts of the properties and sends them using JSON.stringify
 */
export class BehaviorInitializeResponse {
    static sendResponse() {
        system.sendScriptEvent("router:initializeResponse", JSON.stringify(BehaviorManager.getSelfAddonProperty()));
    }
}
