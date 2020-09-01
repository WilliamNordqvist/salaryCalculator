//sub-function that calculates new salary based on experince

const ExperinceSalary = (salary, experince) => {
  let newSalary;

  if (experince >= 4 && experince <= 7) {
    newSalary = salary * 1.2;
  } else if (experince >= 8 && experince <= 10) {
    newSalary = salary * 1.4;
  } else if (experince >= 11) {
    newSalary = salary * 1.6;
  } else {
    newSalary = salary;
  }
  return newSalary;
};

// sub-function that calculates salary after tax based on city and year

const CityTax = (city, year, salary) => {
  let SthlmTax;
  let GbgTax;
  let SalaryAfterTax;

  if (city === "Stockholm") {
    SthlmTax = year === "2016" ? 30 : 29;
    SalaryAfterTax = salary * ((100 - SthlmTax) * 0.01);
  } else if (city === "Göteborg") {
    GbgTax = year === "2016" ? 25 : 22;
    SalaryAfterTax = salary * ((100 - GbgTax) * 0.01);
  }

  return SalaryAfterTax;
};

// sub-function that calculates salary after tax based on city, year and total sum in salary

const TaxBasedOnSalary = (city, year, salary) => {
  let SalaryAfterTax;

  if (salary > 36000 && salary < 45000) {
    SalaryAfterTax = CityTax(city, year, 36000) + (salary - 36000) * 0.5;
  } else if (salary >= 45000) {
    SalaryAfterTax =
      CityTax(city, year, 36000) + 9000 * 0.5 + (salary - 45000) * 0.7;
  } else {
    SalaryAfterTax = CityTax(city, year, salary);
  }
  return Math.round(SalaryAfterTax);
};

//Valdition-function that checks if form is correct

export const Validation = (experince, profession, city, year) => {
  let valid = false;
  const check =
    experince >= 0 &&
    Object.keys(profession).length > 0 &&
    city !== undefined &&
    year !== undefined;

  if (check) {
    valid = true;
  }
  return valid;
};

//Main function that calculates finalsalary together with sub functions

export const OnSubmit = (salary, experince, city, year) => {
  let SalaryBasedOnExperince = ExperinceSalary(salary, experince);
  let SaralaryAfterTax = TaxBasedOnSalary(city, year, SalaryBasedOnExperince);

  return SaralaryAfterTax;
};
