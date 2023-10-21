/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  Sun = 'Sun',
  Mon = 'Mon',
  Tues = 'Tues',
  Wed = 'Wed',
  Th = 'Th',
  Fr = 'Fr',
  Sat = 'Sat',
}

function isWeekend(day: string): boolean {
  return day === Week.Sun || day === Week.Sat;
}
