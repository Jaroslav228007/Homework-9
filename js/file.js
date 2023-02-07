const worker = {
  name: "bill",
  job: "architect",
  salary: 10000,
};
const workers = [
  {
    name: "bill",
    job: "architect",
    salary: 10000,
  },
  {
    name: "Arni",
    job: "actor",
    salary: 100000,
  },
  {
    name: "Bob",
    job: "singer",
    salary: 40000,
  },
  {
    name: "Ann",
    job: "manager",
    salary: 30000,
  },
  {
    name: "Antony",
    job: "Footballer",
    salary: 90000,
  },
  {
    name: "John",
    job: "builder",
    salary: 25000,
  },
  {
    name: "Arthur",
    job: "teacher",
    salary: 20000,
  },
];
function averageSalary(array){
  const salaries = [];

  let result = 0;
  for (const worker of array) {
    salaries.push(worker.salary);

    result += worker.salary;
  }
  const total = result / salaries.length;
  return total;
}
const a = averageSalary(workers);
console.log(a);
// ------------------------------------------------
const workers1 = [
  {
    name: "Robert",
    job: "Dentist",
    salary: 90000,
  },
  {
    name: "Pietro",
    job: "Computer Systems Analyst",
    salary: 120000,
  },
  {
    name: "James",
    job: "Web Developer",
    salary: 100000,
  },
];
const conectionWorkers = [...workers, ...workers1]
console.log(conectionWorkers);
// ------------------------------------------------
const arr = [1, 2, 3, 4, 5, 6];

const [b, c, d, e, f, g] = arr;
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
