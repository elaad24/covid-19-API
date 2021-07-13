## what is it -

    An api that show information about coivd-19 in all of the counties

## data types in the api

> ,iso_code ,continent ,location ,date ,total_cases ,new_cases ,new_cases_smoothed ,total_deaths ,new_deaths ,new_deaths_smoothed ,total_cases_per_million ,new_cases_per_million ,new_cases_smoothed_per_million ,total_deaths_per_million ,new_deaths_per_million ,new_deaths_smoothed_per_million ,reproduction_rate ,icu_patients ,icu_patients_per_million ,hosp_patients ,hosp_patients_per_million ,weekly_icu_admissions ,weekly_icu_admissions_per_million ,weekly_hosp_admissions ,weekly_hosp_admissions_per_million ,new_tests ,total_tests ,total_tests_per_thousand ,new_tests_per_thousand ,new_tests_smoothed ,new_tests_smoothed_per_thousand ,positive_rate ,tests_per_case ,tests_units ,total_vaccinations ,people_vaccinated ,people_fully_vaccinated ,new_vaccinations ,new_vaccinations_smoothed ,total_vaccinations_per_hundred ,people_vaccinated_per_hundred ,people_fully_vaccinated_per_hundred ,new_vaccinations_smoothed_per_million ,stringency_index ,population ,population_density ,median_age ,aged_65_older ,aged_70_older ,gdp_per_capita ,extreme_poverty ,cardiovasc_death_rate ,diabetes_prevalence ,female_smokers ,male_smokers ,handwashing_facilities ,hospital_beds_per_thousand ,life_expectancy ,human_development_index ,excess_mortality

## how to use

| type of reqest | address               | what is do                                | must params | must query | optional query                 |
| -------------- | --------------------- | ----------------------------------------- | ----------- | ---------- | ------------------------------ |
| get            | /                     | return data for all location in database  | ----        | -----      | orderBy , skip ,toShow ,select |
| get            | /byContinent          | retun all the data for spesific continent | -----       | continent  | orderBy , skip ,toShow ,select |
| get            | //byCountry/:location | get info by country                       | location    | -----      | select                         |

## what query do ?

| name    | what it's do                                  |
| ------- | --------------------------------------------- |
| orderBy | to set who the data will be order - defult id |
| skip    | set how meny value to skip - defult 0         |
| toShow  | set how many values to show - defult all      |
| select  | set what data to get - defult all             |

### made by Elaad24
