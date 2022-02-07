import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createProject, fetchAllProject } from '../../action';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Index = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const [option, setOption] = useState([]);

  const mapProjectToOption = () => {
    return projects.map((el) => {
      return {
        key: el.group_id,
        name: el.group_name,
      };
    });
  };

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchAllProject());
    }

    setOption(mapProjectToOption());
  }, [projects]);

  const onHandleSubmit = (values) => {
    const body = {
      ...values,
      km_group: projects.filter((el) => el.group_name === values.km_group)[0]
        .group_id,
    };

    dispatch(createProject(body));
    navigate('/');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center p-5 mt-4">สร้างโครงงาน</h1>
      <form
        className="max-w-screen-sm grid grid-cols-1 gap-5 mx-auto pb-10"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">ชื่อโครงงาน</span>
          </label>
          <Field
            name="km_name"
            type="text"
            placeholder="กรุณาใสชื่อโครงงาน"
            className="input input-bordered"
            component={Input}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">รูปโครงงาน</span>
          </label>
          <Field
            name="km_pic"
            type="text"
            placeholder="กรุณาใสรูปโครงงาน"
            className="input input-bordered"
            component={Input}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ชื่อโครงงาน</span>
          </label>
          <Field
            name="km_group"
            placeholder="กรุณาใสรูปโครงงาน"
            className="input input-bordered"
            component={Select}
            option={option}
          />
        </div>
        <button class="btn btn-secondary mt-4" type="submit">
          สร้างโครงงาน
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'createProject',
})(Index);
