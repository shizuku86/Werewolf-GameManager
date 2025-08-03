/**
 * scripts/properties から manifest.jsonを自動生成する
 * propertiesは、アドオン間通信においても、識別などに利用する
 */

export const properties = {
    metadata: { 
        /** 製作者の名前 */
        authors: [
            // "静空"
        ]
    },
    header: {
        name: "Werewolf-GameManager",
        description: "",
        min_engine_version: [ 1,21,90 ],
        version: [ 1,0,0 ],
        uuid: "3aadab20-832f-457c-9ffb-5d8491f079d3"
    },
    modules: [
        {
            type: "script",
			language: "javascript",
			entry: "scripts/index.js",
            version: "header.version",
            uuid: "083b32e6-7fd3-42f7-92d3-7f146ef48b6d"
        }
    ],
    dependencies: [
		{
			module_name: "@minecraft/server",
			version: "2.0.0"
		},
		{
			module_name: "@minecraft/server-ui",
			version: "2.0.0"
		}
	],
    /** 前提アドオン */
    requiredAddons: {
        /**
         * name: [version]
         */
    },
}