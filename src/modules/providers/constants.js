const ProviderType = {
    financialProvider: 'Financial provider',
    financialEducationProviders: 'Financial education providers',
}

const finProviderProperties = {
    investmentManagementType: 'Investment management type',
    supportedCountriesOfResidence: 'Supported countries of residence',
    investmentType: 'Investment type',
    supportedStocks: 'Supported stocks',
    supportedEtfs: 'Supported ETFs',
}

const financialEducationProvidersProperties = {
    educationCourseTypes: 'Education course types',
    supportedFormats: 'Supported formats',
    levelsOfEducation: 'Levels of education',
}

const investmentManagementTypes = {
    self: 'Self',
    delegated: 'Delegated',
}
const investmentTypes = {
    jointAccount: 'Via a joint account',
}
const educationCourseTypes = {
    trading: 'Trading',
    investing: 'Investing',
    crypto: 'Crypto',
}
const supportedFormats = {
    preRecorded: 'Pre-recorded',
    live: 'Live',
    oneOnOne: 'One on one',
}
const levelsOfEducation = {
    Introductory: 'Introductory',
    Intermediate: 'Intermediate',
    Advanced: 'Advanced',
}

module.exports = {
    ProviderType,
    ProviderTypeENUM: Object.values(ProviderType),
    finProviderProperties,
    finProviderPropertiesENUM: Object.values(finProviderProperties),
    financialEducationProvidersProperties,
    financialEducationProvidersPropertiesENUM: Object.values(financialEducationProvidersProperties),
    investmentManagementTypes,
    investmentManagementTypesENUM: Object.values(investmentManagementTypes),
    investmentTypes,
    investmentTypesENUM: Object.values(investmentTypes),
    educationCourseTypes,
    educationCourseTypesENUM: Object.values(educationCourseTypes),
    supportedFormats,
    supportedFormatsENUM: Object.values(supportedFormats),
    levelsOfEducation,
    levelsOfEducationENUM: Object.values(levelsOfEducation),
}
