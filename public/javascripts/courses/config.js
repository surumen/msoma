var environmentConfig = {
  images: {
    pixelDensityMultiplier: 2,
    maxWidthRequestSize: 360,
    priorityToRectangleVariantForNewsSummariesImages: true
  },
  shared: {
    defaultSlideDurationMs: 5000,
    dropdownCloseDelayMs: 500,
    dropdownCloseDelayMsIPad: 5000,
    uitext: {
      widgetCouldNotLoad: "Widget did not load. Try again.",
      widgetPartialLoad: "Widget did not load completely. Results may be incomplete."
    },
    feeds: {
      urlBase: "https://prod.profile.yale.edu/",
      timeout: 15000,
      urlPageNumberParameter: "pageNumber",
      urlPageSizeParameter: "pageSize",
      urlSearchByNameOnly: "SearchByNameOnly"
    },
    imagesCDN: {
        urlBase: "https://az736297.vo.msecnd.net/Profile/images/"
    }
  },
  search: {
    global:{
        // this timeout value represents a delay inserted to give time to the app to process results for display before acting on the tabs
        hideSummaryTabTimeout: 300 },
    YSM: {
      // this is the default YSM configuration used for the "All of YSM" scope in Tabbed Search
      // if no Widget configuration is provided for the "this site only", this will be the only thing appearing
      // #YT-481
      "organizationIds-faculty": ["113592"],
      "organizationIds-news": ["113592"],
      "organizationIds-medicalServices": ["113592"],
      "organizationIds-organizationsList": ["113631","113629"],
      "includeTypes-organizationsList": "Academic Department",
      site : "25",
      formLabels: {
        gender: "Gender",
        name: "Name",
        searchTerm: "Search Term",
        department: "Department",
        organization: "Organization",
        chooseDepartment: "Choose department...",
        chooseOrganization: "Choose organization...",
        searchWithin: "Search Within",
        thisSiteOnly: "This Site Only",
        allOfYSM: "All of YSM",
        insertName: "First or Last Name",
        role: "Role",
        patientAgeGroup: "Patient Age Group",
        geriatric: "Geriatric",
        adolescent: "Adolescent",
        adult: "Adult",
        children: "Children",
        male: "Male",
        female: "Female",
        facultyRole: "Faculty",
        staffRole: "Staff",
        allRole: "Both",
        submit: "Submit",
        resetFields: "Reset Fields",
        refineSearch: "Refine Your Search"
      },
      tabLabels: {
        summary: "Summary",
        webResults: "Web Results",
        faculty: "People",
        medicalServices: "Medical Services",
        clinicalStudies: "Clinical Trials",
        news: "News",
        healthInfos: "Health Info"
      }
    }
  },
  searchForm: {
    feeds: {
      // for the organizations dropdowns
      urlOrganizationsBody: "/Organizations/",
      urlChildrenEnding: "/Children"
    }
  },
  healthinfos: {
    feeds: {
      urlBase: "/WCF/Search.svc/GetSearchResuts?source=Staywell",
      urlQueryParamsParameter: "queryParams",
      sortOrderParameter: "sortOrder",
      sortByParameter: "sortBy"
    }
  },
  webresults: {
    uitext: {
        breadcrumbsConnector: " > ",
        textToReplace: "[COUNT_HERE]",
        linkToReplace: "[URL]",
        resultsSecuredByVPNAvailable: "There are [COUNT_HERE] results that are secured by IP. You might be able to view these results by connecting to the Yale VPN, then refreshing this page.",
        resultsSecuredByNetIDAvailable: "There are [COUNT_HERE] results that require a Yale NetID. If you have access to these results, they will be displayed if you <a href='[URL]'>log in with your NetID here</a>.",
        resultsSecuredByPasswordAvailable: "There are [COUNT_HERE] results that require a site-specific username and password, which can be displayed if you <a href='[URL]'>login here</a>."
    },
    configuration: {
        urlNetIDLogInModuleDataID: "urlNetIDLogIn",
        urlBasicLogInModuleDataID: "urlBasicLogIn"
    },
    feeds: {
      urlBase: "/WCF/Search.svc/GetSearchResuts?source=AzureSearch",
      urlSearchQueryParameter: "queryParams=q",
      urlAdditionalSearchQueryParameter: '%26site%3D'
    }
  },
  medicalservices: {
    feeds: {
      urlOrganizationsSearchBody: "/organizations/Search"
    }
  },
  faculty: {
    feeds: {
        urlSearchByResearchMeshOnly: "searchByResearchFields",
      urlSearchQueryParameter: "searchQuery",
      urlCredentialedYmgOnlyParameter: "supplementaryOrganizationId", // #YPMS-1429
      urlCredentialedYmgOnlyValue: 110193,
      urlSearchFieldsScopeParameter: "searchFieldsScope", // not implemented yet, #YPMS-1431
      urlOrganizationsBody: "/organizations/",
      urlMembersSearchBody: "/Users/Search",
      urlPhysicianGenderParameter: "physicianGender",
      urlPatientAgeGroupParameter: "patientAgeGroup",
      urlRoleParameter: "jobClassIds",
      urlFacultyRoleValue: "4,9", //YPMS-1141
      urlStaffRoleValue: "1,2,3,5,6,8",
      urlGenderParameter: "gender",
      urlIsSeeingAdultsParameter: "isSeeingAdults",
      urlIsSeeingAdolescentsParameter: "isSeeingAdolescents",
      urlIsSeeingChildrenParameter: "isSeeingChildren",
      urlIsSeeingGeriatricsParameter: "isSeeingGeriatrics"
    }
  },
  news: {
    feeds: {
      urlUserNewsUrlBody: "/news/userNews",
      urlOrganizationsBody: '/Organizations/',
      urlUserDetailsBody: "/Users/",
      urlSummariesBody: "/news/summaries/",
      urlNewsCalendarBody: "/news/calendar/",
      urlMembersEnding: "/MembersExtendedInfo",
      urlKeywordsEnding: "/Keywords",
      urlNewsAuthorsEnding: '/News/Authors/Search?searchQuery=%QUERY',
      urlUserNamesEnding: '/UserNames/Search?searchQuery=%QUERY',
      urlOrderByFeaturedEnding: "&shouldOrderByFeatured=true",
      urlOrganizationIdParameter: "organizationId",
      urlKeywordsParameter: "keywordIds",
      urlStartDateParameter: "StartDate",
      urlEndDateParameter: "EndDate",
      urlSearchQueryParameter: "searchQuery",
      urlUserSearchQueryParameter: "userSearchQuery",
      urlUserIdsParameter: "userIds",
      urlUserIdParameter: "userId",
      urlPageNumberParameter: "pageNumber",
      urlPageSizeParameter: "pageSize"
    }
  },
  calendar: {
    googleCalendarShareBegin: "https://www.google.com/calendar/render?cid=webcal://tools1.medicine.yale.edu/calendar/group.ics?id=",
    outlookCalendarShareBegin: "webcal://tools1.medicine.yale.edu/calendar/group.ics?id=",
    embedCalendarUrlEnding: "calendar/?output=embed&amp;template=upcoming&amp;div=calendar_embed",
    approveEventsUrl: 'https://tools.medicine.yale.edu/calendar/approve',
    postEventUrl: 'https://tools.medicine.yale.edu/calendar/post',
    printCalendarBody: 'calendar/?output=pdf&f=w',
    profileSystem: {
      profileUrl: "https://tools.medicine.yale.edu/phonebook?id=",
      documentUrl: "https://tools.medicine.yale.edu/portal/stream?id="
    },
    feeds: {
      urlBase: 'https://tools.medicine.yale.edu/',
      urlCalendarBegin: 'calendar/?f=l',
      urlStartDateConnector: "&d=",
      urlEndDateConnector: "&e=",
      urlSearchQueryConnector: "&q=",
      urlMaxItemsConnector: "&c=",
      urlKeywordsConnector: "&t=",
      urlDaysInFutureConnector: "&i=",
      urlOptionalAliasConnector: "&u=",
      urlRelativeSelectedDateConnector: "&d=",
      jsonFormat: "&output=json",
      timeout: 20000
    },
    event: {
      feeds: {
        urlIdBegin: '?id=',
        urlCalendarEventIdBegin: 'calendar/event?id=',
        urlStartDateConnector: "&dtstart=",
        urlOptionalAliasConnector: "&alias="
      },
      urlEditBegin: 'https://tools.medicine.yale.edu/calendar/post',
      urlShareBegin: [window.location.origin, window.location.pathname].join(''),
      googleMapsBegin: 'https://www.google.com/maps/embed/v1/place?q=',
      googleMapsEnding: '&key=AIzaSyD9aqgYRk5OY6xSd7pi1Yk3bmOnan-8DrU'
    }
  },
  maps: {
    uitext: {
        atThisLocationTitle: "Offices in this location",
        widgetPartialLoad: "No associated locations were found."
    },
    config: {
      itemsColsForTabbedMaps: 4,
      bootstrapColNumberForTabbedMaps: 3, //3 * 4 = 12
      itemsColsForMaps: 3,
      bootstrapColNumberForMaps: 4, //4 * 3 = 12
      itemsColsForMaps_offices: 2,
      bootstrapColNumberForMaps_offices: 6 //6 * 2 = 12
    },
    feeds: {
      urlOrganizationsBody: "/Organizations/",
      urlBuildingsOfOrganizationEnding: "/Addresses",
      urlBuildingsOfOrganizationWithChildrenEnding: "/Buildings/Children",
      urlBuildingsBody: "/Buildings/",
      urlParking: "/Addresses/Parkings",
      urlUsersBuilding: "/Users/Building/",
      urlUsersBuildingEnding: "/MapInfo",
      urlOrganizationsBuilding: "/Organizations/Building/",
      urlUserBody: "/Users/",
      urlAddressesEnding: "/Addresses",
      urlAddressesBody: "/Addresses/",
      urlAddressesCategoryParameter: "addressCategory"
    },
    directionsUrlBegin: "https://www.google.com/maps?directionsMode=driving&",
    directionsUrlFrom: "&saddr=",
    directionsUrlTo: "daddr="
  },
  internationalActivities: {
    feeds: {
      urlAllCountries: "/Activities/Map",
      urlUsersOfCountry: "/Activities/Map?includeUserInfo=true&CountryId="
    }
  },
  clinicalStudies: {
    feeds: {
      urlAllCategories: "/ClinicalStudies/Categories?pageSize=150",
      urlClinicalStudiesResults: "/ClinicalStudies/search",
      urlClinicalStudiesHic: "/HicId/",
      urlSearchQueryParameter: "searchQuery",
      urlCategoryIdsParameter: "categoryIds",
      urlGenderAcceptedParameter: "gender",
      urlHealthyVolunteersOnly: "areHealthyVolunteersAccepted",
      urlPageNumberParameter: "pageNumber",
      urlPageSizeParameter: "pageSize",
      urlOrganizationIdParameter: "organizationId",
      urlAgeParameter: "age",
      urlAgeUnitParameter: "ageDimension",
      urlAgeUnitYearsValue: "1",
      urlAgeUnitMonthsValue: "2"
    },
    uitext: {
      title: "Find a Trial",
      description: "You can search clinical trials by typing in a keyword. You can also narrow your search by typing in an age or choosing a gender or by clicking on the category boxes below.",
      ageFiltering: "Narrow results to volunteers who are aged"
    },
    urlArticleGeneric: "http://www.yalestudies.org/find/[hicId].trial",
    urlArticleGenericReplace: "[hicId]",
    maxLines: 4
  }
};
