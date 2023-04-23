export const getYearFromBirthdate = (birthDate: string) => {
    const dateParts = birthDate.split('.');
    const isoDate = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];

    const formattedBirthDate = new Date(isoDate);
    const today = new Date();

    let age = today.getFullYear() - formattedBirthDate.getFullYear();
    const monthDiff = today.getMonth() - formattedBirthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < formattedBirthDate.getDate())
    ) {
        age--;
    }

    return age;
};
