"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var personalia = {
            name: "Esra Hofstede",
            title: "Bachelor of Information and Communication Technology",
            jobTitle: "Software Engineer en Web Developer",
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
                    description: "In deze training heb ik geleerd om machine learning toe te passen om complexe vraagstukken op te lossen. Hiervoor werden R- en Python-pakketten, Spark en AzureML gebruikt."
                }
            ]
        };
        var workexperience = [
            {
                company: "Info Support",
                jobTitle: "Afstudeerder",
                jobDescription: "Als afstudeerproject heb ik onderzocht hoe veiligere API's gebouwd kunnen worden door validatie op data-integriteit toe te passen.",
                started: "2016",
                ended: "2016"
            },
            {
                company: "Topicus",
                jobTitle: "Stagair",
                jobDescription: "Tijdens mijn stage heb ik een visualisator gebouwd die processen uit een SQL-database visualiseert in de browser. Hiervoor zijn technieken als AngularJS 1.4, D3JS en Dagre gebruikt.",
                started: "2015",
                ended: "2015"
            },
            {
                company: "Wanno BV.",
                jobTitle: "Webdeveloper en Serverbeheerder",
                jobDescription: "Binnen Wanno BV. zijn meerdere websites ontwikkeld. Daarnaast zijn er meerdere servers in eigen beheer. Als webdeveloper en netwerkbeheerder worden nieuwe websites gerealiseerd en de servers onderhouden.",
                started: "2014",
                ended: "2014"
            },
            {
                company: "Buro302",
                jobTitle: "PHP-developer",
                jobDescription: "In januari 2014 begonnen bij Buro302, een studentenbedrijf wat ondere andere webdevelopment aanbied. Hier heb ik meegewerkt aan meerdere projecten.",
                started: "2014",
                ended: "2014"
            },
            {
                company: "Twence BV.",
                jobTitle: "ICT- en Helpdeskmedewerker",
                jobDescription: "Bij Twence ontstond de behoefte aan een tijdelijke medewerker voor het inrichten van een groot aantal nieuwe werkplekken. Na dit project werd ik ingezet voor meerdere opdrachten, waaronder het inrichten van een nieuw telefoonnetwerk, het documenteren van projecten en overzetten van documenten naar een nieuw document management systeem.",
                started: "2013",
                ended: "2014"
            },
            {
                company: "In's & Outs",
                jobTitle: "Monteur Raamdecoratie",
                jobDescription: "In vakanties meerdere projecten gedaan op het gebied van raamdecoratie. Deze projecten vonden plaats in heel Nederland. De meeste zonweringen werden gemonteerd in opdracht van B&C.",
                started: "2012",
                ended: "2012"
            },
            {
                company: "Reklamix",
                jobTitle: "Bezorger",
                jobDescription: "Tijdens de middelbare school begonnen met het bezorgen van huis-aan-huis bladen.",
                started: "2008",
                ended: "heden"
            },
        ];
        var portfolio = {
            Projects: [
                {
                    Name: "Stage",
                    Description: "Procesvisualisatie met HTML5",
                    Url: "none",
                    Customer: {
                        Name: "Topicus",
                        Url: "topicus.nl"
                    },
                    Employer: {
                        Name: "Topicus",
                        Url: "topicus.nl"
                    },
                    Image: {
                        Url: "https://c1.staticflickr.com/9/8555/29781698962_030ed5fc7e_o.png",
                        widthRatio: 3,
                        heightRatio: 2
                    }
                },
                {
                    Name: "Afstuderen",
                    Description: "API's beter beveiligen door te valideren op data-integriteit met Machine Learning",
                    Url: "none",
                    Customer: {
                        Name: "Info Support",
                        Url: "InfoSupport.com"
                    },
                    Employer: {
                        Name: "Info Support",
                        Url: "InfoSupport.com"
                    },
                    Image: {
                        Url: "https://c5.staticflickr.com/9/8175/29601382300_c8aabdf8e1_o.jpg",
                        widthRatio: 2,
                        heightRatio: 1
                    }
                },
                {
                    Name: "DDOA",
                    Description: "Confluence plugin maken",
                    Url: "none",
                    Customer: {
                        Name: "Luminis",
                        Url: "Luminis"
                    },
                    Employer: {
                        Name: "HAN",
                        Url: "HAN.nl"
                    },
                    Image: {
                        Url: "https://c1.staticflickr.com/9/8068/29268155154_67ce58718e_o.png",
                        heightRatio: 1,
                        widthRatio: 1
                    }
                },
                {
                    Name: "CRIA",
                    Description: "Interactieve website maken",
                    Url: "none",
                    Customer: {
                        Name: "Luminis",
                        Url: "Luminis"
                    },
                    Employer: {
                        Name: "HAN",
                        Url: "HAN.nl"
                    },
                    Image: {
                        Url: "https://c2.staticflickr.com/6/5534/29781698732_47ae16e207_o.png",
                        heightRatio: 1,
                        widthRatio: 1
                    }
                }
            ],
            Websites: [
                {
                    Name: "Tennis met Passie",
                    Description: "Website",
                    Url: "tennismetpassie.nl",
                    Customer: {
                        Name: "Andre Mekers",
                        Url: "none"
                    },
                    Employer: {
                        Name: "Freelance",
                        Url: "none"
                    },
                    Image: {
                        Url: "https://c6.staticflickr.com/9/8572/28605118445_ab203c0aa7_b.jpg",
                        heightRatio: 1,
                        widthRatio: 1
                    }
                },
                {
                    Name: "Klein Overmeen Bouwt",
                    Description: "Website",
                    Url: "kleinovermeenbouwt.nl",
                    Customer: {
                        Name: "Niek Klein Overmeen",
                        Url: "none"
                    },
                    Employer: {
                        Name: "Freelance",
                        Url: "none"
                    },
                    Image: {
                        Url: "https://c3.staticflickr.com/9/8714/28572891146_28d1c16603_b.jpg",
                        heightRatio: 1,
                        widthRatio: 1
                    }
                },
                {
                    Name: "Duurzamerwijs",
                    Description: "Website",
                    Url: "duurzamerwijs.nl",
                    Customer: {
                        Name: "Innovatielab duurzaam bouwen",
                        Url: "http://www.energieneutraalbouwen.nl/circulair/innovatielab-duurzaam-bouwen-2014/"
                    },
                    Employer: {
                        Name: "Buro302",
                        Url: "none"
                    },
                    Image: {
                        Url: "https://c6.staticflickr.com/9/8406/27989193653_402b5f3ca6_b.jpg",
                        heightRatio: 1,
                        widthRatio: 1
                    }
                },
                {
                    Name: "EsraHofstede",
                    Description: "Website",
                    Url: "esrahofstede.nl",
                    Customer: {
                        Name: "Esra Hofstede",
                        Url: "esrahofstede.nl"
                    },
                    Employer: {
                        Name: "Freelance",
                        Url: "none"
                    },
                    Image: {
                        Url: "https://c1.staticflickr.com/9/8713/29268155644_dfcd279891_o.png",
                        heightRatio: 1,
                        widthRatio: 1
                    }
                },
            ]
        };
        return { personalia: personalia, pitch: pitch, skills: skills, workexperience: workexperience, portfolio: portfolio };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map