export class DtdlStore {

    public getListOfItems = () => {
        return ['mockDevices']
    }

    public getDtdl = (type: string) => {
        switch (type) {
            case 'mockDevices':
                return [
                    {
                        "@id": "dtmi:codetunez:md;1",
                        "@type": "Interface",
                        "contents": [],
                        "displayName": {
                            "en": "mock-devices"
                        },
                        "extends": [
                            "dtmi:codetunez:mdBaseInterface;1"
                        ],
                        "@context": [
                            "dtmi:iotcentral:context;2",
                            "dtmi:dtdl:context;2"
                        ]
                    },
                    {
                        "@context": [
                            "dtmi:iotcentral:context;2",
                            "dtmi:dtdl:context;2"
                        ],
                        "@id": "dtmi:codetunez:mdBaseInterface;1",
                        "@type": "Interface",
                        "contents": [
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:battery;1",
                                "@type": "Telemetry",
                                "displayName": {
                                    "en": "battery"
                                },
                                "name": "battery",
                                "schema": "double"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:hotplate;1",
                                "@type": "Telemetry",
                                "displayName": {
                                    "en": "hotplate"
                                },
                                "name": "hotplate",
                                "schema": "double"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:random;1",
                                "@type": "Telemetry",
                                "displayName": {
                                    "en": "random"
                                },
                                "name": "random",
                                "schema": "double"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:fan;1",
                                "@type": "Telemetry",
                                "displayName": {
                                    "en": "fan"
                                },
                                "name": "fan",
                                "schema": "double"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:inc;1",
                                "@type": "Telemetry",
                                "displayName": {
                                    "en": "inc"
                                },
                                "name": "inc",
                                "schema": "double"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:dec;1",
                                "@type": "Telemetry",
                                "displayName": {
                                    "en": "dec"
                                },
                                "name": "dec",
                                "schema": "double"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:reboot;1",
                                "@type": "Command",
                                "commandType": "synchronous",
                                "displayName": {
                                    "en": "reboot"
                                },
                                "name": "reboot"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:shutdown;1",
                                "@type": "Command",
                                "commandType": "synchronous",
                                "displayName": {
                                    "en": "shutdown"
                                },
                                "name": "shutdown"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:firmware;1",
                                "@type": "Command",
                                "commandType": "synchronous",
                                "displayName": {
                                    "en": "firmware"
                                },
                                "name": "firmware"
                            },
                            {
                                "@id": "dtmi:codetunez:mdBaseInterface:setting;1",
                                "@type": "Property",
                                "displayName": {
                                    "en": "setting"
                                },
                                "name": "setting",
                                "schema": "string",
                                "writable": true
                            }
                        ],
                        "displayName": {
                            "en": "Base Interface"
                        }
                    }
                ]
            default:
                return [];
        }
    }
}