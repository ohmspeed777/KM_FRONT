import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

const Section = () => {
  const units = useSelector((state) => state.units);
  const renderCards = () => {
    return units.map((el) => (
      <Card
        key={el.km_unit}
        name={el.km_name}
        img={el.km_pic}
        project={el.group_project?.group_name}
      />
    ));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center p-6 mt-4 text-3xl">วิธีการดำเนินการต่างๆ</h1>
      <button class="btn btn-primary">
        <Link to="/createProject">สร้างโครงงาน</Link>
      </button>
      <div className="grid grid-cols-4 gap-5 my-4">{renderCards()}</div>
    </div>
  );
};

export default Section;
