import StudentCard from "./StudentCard";


const StaffList = () => {

    const staffs = [
        {
          name: "John Doe",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP66mdorfOaQyqcRvKY7w3ty_piOF9OkaSg&s",
          about: "John is a senior software engineer with over 10 years of experience in full-stack development.",
          depColor: "#4CAF50" // Green (for the development team)
        },
        {
          name: "Jane Smith",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGq5a9rL0PCVYAcz_wQId3SUVvYaJj3335g&s",
          about: "Jane is a project manager with a strong background in agile methodologies and team leadership.",
          depColor: "#2196F3" // Blue (for the project management team)
        },
        {
          name: "Emily Johnson",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsakUW4YnpBoeVNdpaHEXreJjdeVSsgJArA&s",
          about: "Emily is a creative designer who specializes in UI/UX design and has a passion for user-centric solutions.",
          depColor: "#FF9800" // Orange (for the design team)
        },
        {
          name: "Michael Brown",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzG6tlJUhsfZHZOd-tMZpS5FSQSSm6z7UNqA&s",
          about: "Michael is a quality assurance lead focused on ensuring product stability and performance.",
          depColor: "#9C27B0" // Purple (for the QA team)
        },
        {
          name: "Sarah Williams",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhJS7oCcKzLpCEY8edSqFRQHLVb2NIT-F1g&s",
          about: "Sarah is a marketing specialist with expertise in digital marketing and social media strategy.",
          depColor: "#FF5722" // Red (for the marketing team)
        },
        {
          name: "David Lee",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpW3SES59J1SWoLwToT4fxVjHgvM4lwqnQQ&s",
          about: "David is a data analyst who loves turning raw data into actionable insights for the business.",
          depColor: "#3F51B5" // Indigo (for the analytics team)
        }
      ];

      const styles={
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
           
        }
    }
      
  return <div style={styles.grid}>
    {staffs.map((staff) => (
        <StudentCard
        key={staff.name}
        name={staff.name}
        imgurl={staff.imgUrl}
        about={staff.about}
        depColor={staff.depColor}
      />
    ))}

  </div>
};

export default StaffList