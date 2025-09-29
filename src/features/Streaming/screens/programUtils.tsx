export function getUpcomingPrograms(channel:any) {

  switch (channel) {
    case 'Tigrai TV':
      return [
        { id: 1, title: "ዜና ውሽጢ ዓዲ", startHour: 8, endHour: 9, days: [0, 1, 2, 3, 4, 5, 6], time: "02:00 ንጎሆ - 3:00 ንጎሆ", category: "ዜና ውሽጢ ዓዲ",description: "ዕለታዊ ዘናታት ", },
        { id: 2, title: "ዜና ውፃኢ",startHour: 9, endHour: 10, days: [0, 1, 2, 3, 4, 5, 6],time: "3:00 ንጎሆ - 4:00 ንጎሆ", category: "ዜና ውፃኢ",description: "ዓለምልኻዊ ዜናታት.", },
        { id: 3, title: "ዘጣለልናዮ ሓቂ ",startHour: 11, endHour: 12, days: [1, 2, 5,],time: "5:00 ንጎሆ - 6:00 ንጎሆ", category: "ዘጣለልናዮ ሓቂ",description: "ዘጣለልናዮም ሓቅታት ዝምሓላለፈሉ ፕሮግራም", },
        { id: 4, title: "ቢዝነስ ",startHour: 13, endHour: 14, days: [4, 5, 6,],time: "7:00 ቀትሪ - 8:00 ቀትሪ", category: "ቢዝነስ",description: "ዘጣለልናዮም ቢዝነስ ዝምሓላለፈሉ ፕሮግራም", },
        { id: 5, title: "ኹነታት ኣየር ትግራይ ",startHour: 15, endHour: 16, days: [1, 2, 3,],time: "9:00 ቀትሪ - 10:00 ቀትሪ", category: "ኹነታት ኣየር ትግራይ",description: "ኹነታት ኣየር ትግራይ", },
        { id: 6, title: "ዶክመንተሪ ",startHour: 17, endHour: 18, days: [3,4, 5, 6,],time: "11:00 ቀትሪ - 12:00 ቀትሪ", category: "ዶክመንተሪ",description: "ዶክመንተሪ", },
        { id: 7, title: "ዜና ውሽጢ ዓዲ", startHour: 19, endHour: 20, days: [0, 1, 2, 3, 4, 5, 6], time: "11:00 ንቀትሪ - 12:00 ቀትሪ", category: "ዜና ውሽጢ ዓዲ",description: "ዕለታዊ ዘናታት ", },
        { id: 8, title: "ቆላሕታ  ",startHour: 20, endHour: 21, days: [1, 2, 3,],time: "2:00 ምሸት - 3:00 ምሸት", category: "ዘቆላሕታ ",description: "ቆላሕታ ምደባት", },
        { id: 9, title: "ትግራይ እንታይ ትምሃር ",startHour: 21, endHour: 22, days: [2, 5, 6,],time: "3:00 ምሸት - 4:00 ምሸት", category: "ትግራይ እንታይ ትምሃር",description: "ትግራይ እንታይ ትምሃር", },
        { id: 10, title: "መኣዲ ጥበብ",startHour: 22, endHour: 23, days: [3, 4, 6,],time: "5:00 ምሸት - 6:00 ምሸት", category: "መኣዲ ጥበብ",description: "መኣዲ ጥበብ ዝገልፅ ፕሮግራም", },
        { id: 11, title: "እንግዶት ደርፊ",startHour: 23, endHour: 24, days: [0, 2, 4,],time: "5:00 ምሸት - 6:00 ምሸት", category: "እንግዶት ደርፊ",description: "እንግዶት ደርፊ ዝምሓላለፈሉ ፕሮግራም", },
      ];
    case 'Radio Tigrai':
      return [
        { id: 1, title: "ዜና", startHour: 8, endHour: 9, days: [0, 1, 2, 3, 4, 5, 6], time: "02:00 ንጎሆ - 3:00 ንጎሆ", category: "ዜና ውሽጢ ዓዲ",description: "ዕለታዊ ዘናታት ", },
        { id: 2, title: "ዜና",startHour: 9, endHour: 10, days: [0, 1, 2, 3, 4, 5, 6],time: "3:00 ንጎሆ - 4:00 ንጎሆ", category: "ዜና ውፃኢ",description: "ዓለምልኻዊ ዜናታት.", },
        { id: 3, title: "ትረካ መፅሓፍቲ ",startHour: 11, endHour: 12, days: [1, 2, 5,],time: "5:00 ንጎሆ - 6:00 ንጎሆ", category: "ትረካ መፅሓፍቲ",description: "ትረካ መፅሓፍቲ ዝምሓላለፈሉ ፕሮግራም", },
        { id: 4, title: "ብኣንደበቶም ",startHour: 13, endHour: 14, days: [4, 5, 6,],time: "7:00 ቀትሪ - 8:00 ቀትሪ", category: "ብኣንደበቶም",description: "ዘጣለልናዮም ብኣንደበቶም ዝምሓላለፈሉ ፕሮግራም", },
        { id: 5, title: "ኹነታት ኣየር ትግራይ ",startHour: 15, endHour: 16, days: [1, 2, 3,],time: "9:00 ቀትሪ - 10:00 ቀትሪ", category: "ኹነታት ኣየር ትግራይ",description: "ኹነታት ኣየር ትግራይ", },
        { id: 6, title: "ዶሕግን ፍትሕን ",startHour: 17, endHour: 18, days: [3,4, 5, 6,],time: "11:00 ቀትሪ - 12:00 ቀትሪ", category: "ሕግን ፍትሕን",description: "ሕግን ፍትሕን", },
        { id: 7, title: "ዜና", startHour: 19, endHour: 20, days: [0, 1, 2, 3, 4, 5, 6], time: "11:00 ንቀትሪ - 12:00 ቀትሪ", category: "ዜና ውሽጢ ዓዲ",description: "ዕለታዊ ዘናታት ", },
        { id: 8, title: "ትዕዝብቲ  ",startHour: 20, endHour: 21, days: [1, 2, 3,],time: "2:00 ምሸት - 3:00 ምሸት", category: "ትዕዝብቲ ",description: "ትዕዝብቲ ምደባት", },
        { id: 9, title: "ትግራይ እንታይ ትምሃር ",startHour: 21, endHour: 22, days: [2, 5, 6,],time: "3:00 ምሸት - 4:00 ምሸት", category: "ትግራይ እንታይ ትምሃር",description: "ትግራይ እንታይ ትምሃር", },
        { id: 10, title: "ትርጉም እታ ደርፊ",startHour: 22, endHour: 23, days: [3, 4, 6,],time: "5:00 ምሸት - 6:00 ምሸት", category: "ትርጉም እታ ደርፊ",description: "ትርጉም እታ ደርፊ ዝገልፅ ፕሮግራም", },
        { id: 11, title: "ስፖርት",startHour: 23, endHour: 24, days: [0, 2, 4,],time: "5:00 ምሸት - 6:00 ምሸት", category: "ስፖርት",description: "ስፖርት ዝምሓላለፈሉ ፕሮግራም", },
      ];
    // case 'FM Tigrai 98.0':
    //   return [
    //     { id: 1, title: "ሙዚቃ ሰዓት - Music Hour",startHour: 8, endHour: 10, days: [1, 2, 3, 4, 5],time: "4:00 PM", category: "Music" },
    //     { id: 2, title: "አስተያየት - Feedback Session",startHour: 8, endHour: 10, days: [1, 2, 3, 4, 5],time: "5:30 PM", category: "Talk Show",description: "Daily morning news and discussion covering current affairs in Tigray and beyond.", },
    //   ];
    default:
      return [];
  }
}

    const programs = {
    'Tigrai TV': {
      title: "ቐጥታ ፈነወ ዕለታዊ መደብ ቲቪ - TV Live",
      time: "08:00 AM - 10:00 AM",
      description: "...",
    },
    'Radio Tigrai': {
      title: "ቐጥታ ፈነወ ዕለታዊ መደብ ሬድዮ - Radio Live",
      time: "12:00 PM - 1:00 PM",
      description: "...",
    },
    // 'FM Tigrai 98.0': {
    //   title: "ሙዚቃ ሰዓት - Music Hour",
    //   time: "4:00 PM - 5:00 PM",
    //   description: "The latest Tigrayan music and artist interviews.",
    // }
  };

export function getCurrentProgram(channel:string) {
  // In a real app, this would fetch from an API

  let upcomingPrograms = getUpcomingPrograms(channel)
  const { currentDay, currentHour } = getCurrentDayAndHour();

  return upcomingPrograms.find(program => 
    program.days.includes(currentDay) &&
    currentHour >= program.startHour && 
    currentHour < program.endHour
  ) || (programs as Record<string,any>)[channel] || programs['Tigrai TV'];
}

export function getDailyProgram(channel:string) {
  // In a real app, this would fetch from an API

  let upcomingPrograms = getUpcomingPrograms(channel)
  const { currentDay, currentHour } = getCurrentDayAndHour();

  return upcomingPrograms.filter(program => program.days.includes(currentDay))
}

// Get current day and hour
export const getCurrentDayAndHour = () => {
  const now = new Date();
  return {
    currentDay: now.getDay(), // 0 (Sunday) to 6 (Saturday)
    currentHour: now.getHours()
  };
};

// Format hour to 12-hour time with AM/PM
export const formatHour = (hour:number) => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:00 ${period}`;
};