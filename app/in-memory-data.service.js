"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var personalia = {
            name: "Esra Hofstede",
            age: 21,
            city: "Deventer",
            email: "info@esrahofstede.nl",
            currentEmployer: "Topicus",
            holiday: "tot en met 23 juli 2016"
        };
        var pitch = {
            single: "Esra Hofstede",
            full: "Mezelf omschrijf ik als een enthousiaste student die breed geïnteresseerd is en naast programmeren ook weet te communiceren en organiseren tussen verschillende afdelingen. Tijdens projecten omschrijven anderen mij als hardwekkend, goed in het plannen en vinden dat ik probeer om een duidelijke structuur in projecten te krijgen. Tijdens mijn opleiding heb ik mij in verschillende programmeertalen verdiept zoals C#, Java, Javascript en T-SQL. ",
            karaktereigenschappen: ["doorzetter"]
        };
        var skills = {
            ProgrammingLanguages: [
                {
                    name: "HTML",
                    indication: 9
                },
                {
                    name: "CSS",
                    indication: 8
                },
                {
                    name: "Javascript",
                    indication: 8
                },
                {
                    name: "SQL",
                    indication: 8
                },
                {
                    name: "C#",
                    indication: 10
                },
                {
                    name: "Java",
                    indication: 6
                },
            ],
            Software: [
                {
                    name: "Photoshop",
                    indication: 7
                },
                {
                    name: "Visual Studio",
                    indication: 9
                },
                {
                    name: "Visual Studio",
                    indication: 9
                },
            ],
            Frameworks: [
                {
                    name: "JQuery",
                    indication: 6
                },
                {
                    name: "ASP.NET",
                    indication: 9
                },
                {
                    name: "Angular",
                    indication: 8
                },
                {
                    name: "WCF",
                    indication: 8
                },
                {
                    name: "Entity Framework",
                    indication: 8
                },
                {
                    name: "LESS",
                    indication: 8
                },
            ],
            SpeakingLanguages: [
                {
                    name: "Nederlands",
                    indication: 9
                },
                {
                    name: "Engels",
                    indication: 7
                },
                {
                    name: "Duits",
                    indication: 5
                }
            ],
            Personal: [
                {
                    name: "Creativiteit",
                    indication: 6
                }
            ],
            Knowledge: [
                "Machine Learning",
                "UML",
                "AzureML",
                "D3",
                "ERM",
                "Scrum",
                "RUP",
                "FCO-IM",
                "User Experience",
                "LINQ",
                "XML",
                "SOAP",
                "WebAPI",
                "SO Architecture",
                "ATDD",
                "OOP",
                "TDD",
                "Azure",
                "Automatic Build",
                "Continuous Deployment",
                "DevOps",
                "Endeavour"
            ],
            Certificaten: [
                {
                    name: "Studenttrack ASP.NET MVC",
                    date: "25 april 2014",
                    place: "Veenendaal",
                    description: "Deze studenttrack is aangeboden door InfoSupport. Hierin werd besproken hoe webapplicaties ontwikkeld konden worden met ASP.NET."
                },
                {
                    name: "Microsoft Azure Machine Learning Training",
                    date: "22 februari 2016",
                    place: "Veenendaal",
                    description: "In deze training heb ik geleerd om machine learning toe te passen door R- en Python-pakketten en eersteklas algoritmen van Microsoft-ondernemingen als Xbox en Bing kunt gebruiken en hoe u eigen R- en Python-code kunt gebruiken."
                }
            ]
        };
        return { personalia: personalia, pitch: pitch, skills: skills };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map