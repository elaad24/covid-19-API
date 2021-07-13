## what is it -

    An API that shows information about COVID-19 in all of the counties

## data types in the api

> ,iso_code ,continent ,location ,date ,total_cases ,new_cases ,new_cases_smoothed ,total_deaths ,new_deaths ,new_deaths_smoothed ,total_cases_per_million ,new_cases_per_million ,new_cases_smoothed_per_million ,total_deaths_per_million ,new_deaths_per_million ,new_deaths_smoothed_per_million ,reproduction_rate ,icu_patients ,icu_patients_per_million ,hosp_patients ,hosp_patients_per_million ,weekly_icu_admissions ,weekly_icu_admissions_per_million ,weekly_hosp_admissions ,weekly_hosp_admissions_per_million ,new_tests ,total_tests ,total_tests_per_thousand ,new_tests_per_thousand ,new_tests_smoothed ,new_tests_smoothed_per_thousand ,positive_rate ,tests_per_case ,tests_units ,total_vaccinations ,people_vaccinated ,people_fully_vaccinated ,new_vaccinations ,new_vaccinations_smoothed ,total_vaccinations_per_hundred ,people_vaccinated_per_hundred ,people_fully_vaccinated_per_hundred ,new_vaccinations_smoothed_per_million ,stringency_index ,population ,population_density ,median_age ,aged_65_older ,aged_70_older ,gdp_per_capita ,extreme_poverty ,cardiovasc_death_rate ,diabetes_prevalence ,female_smokers ,male_smokers ,handwashing_facilities ,hospital_beds_per_thousand ,life_expectancy ,human_development_index ,excess_mortality

## how to use

| type of request | address               | what is do                                | must params | must query | optional query                          |
| --------------- | --------------------- | ----------------------------------------- | ----------- | ---------- | --------------------------------------- |
| get             | /                     | return data for all location in database  | ----        | -----      | orderBy , skip ,toShow ,select,ascend   |
| get             | /byContinent          | retun all the data for spesific continent | -----       | continent  | orderBy , skip ,toShow ,select , ascend |
| get             | //byCountry/:location | get info by country                       | location    | -----      | select                                  |

## what query do?

| name    | what it does                                                                   |
| ------- | ------------------------------------------------------------------------------ |
| orderBy | to set who the data will be ordered - default id                               |
| skip    | set how many values to skip - default 0                                        |
| toShow  | set how many values to show - default all                                      |
| select  | set what data to get - default all                                             |
| ascend  | set if the data will show on ascending order or descending: default descending |

## examples with queries

| address                                                                    | what it does                                                                                                 | from which URL |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------- |
| /?select=location,new_cases,new_deaths                                     | **return data about all the countrys in country name , new cases , new death**                               | general url    |
| /byContinent?continent=North America&orderBy=total_cases&ascend=true       | **return data about countries in North America order by there number of total cases in asending order**      | continent url  |
| /byCountry/Laos?select=location,total_cases_per_million,new_cases_smoothed | **return data from country Loas and with total cases per milion and new cases smoothed and location fields** | country url    |

## examples without optional queries

| address                           | what it does                                                              | from which URL |
| --------------------------------- | ------------------------------------------------------------------------- | -------------- |
| /                                 | **return data about all the countrys in all the fields**                  | general url    |
| /byContinent?continent=North Asia | **return data about countries in the continent Asia with all the fields** | continent url  |
| /byCountry/Israel                 | **retudn data from country Israel with all the fields**                   | country url    |

### made by Elaad24
