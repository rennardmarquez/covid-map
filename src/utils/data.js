export const getSummary = locations => {
  let summary = [];

  locations.forEach(element => {
    const existing = summary.find(
      item => item.country_code === element.country_code
    );

    if (existing) {
      const index = summary.findIndex(
        item => item.country_code === element.country_code
      );

      console.log(summary[index].latest);
      summary[index] = {
        country_code: element.country_code,
        country: element.country,
        latest: {
          confirmed: summary[index].latest.confirmed + element.latest.confirmed,
          deaths: summary[index].latest.deaths + element.latest.deaths,
          recovered: summary[index].latest.recovered + element.latest.recovered
        }
      };
    } else {
      summary = [
        ...summary,
        {
          country_code: element.country_code,
          country: element.country,
          latest: element.latest
        }
      ];
    }
  });

  return summary;
};
