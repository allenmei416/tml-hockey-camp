// src/Register.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Register.css';

const Register = () => {
  const [parentInfo, setParentInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });
  const [children, setChildren] = useState([{
    fullName: '',
    birthday: null,
    program: '',
    attendanceDays: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
    },
  }]);

  const handleParentChange = (e) => {
    const { name, value } = e.target;
    setParentInfo({ ...parentInfo, [name]: value });
  };

  const handleChildChange = (index, e) => {
    const { name, value } = e.target;
    const updatedChildren = [...children];
    updatedChildren[index] = { ...updatedChildren[index], [name]: value };
    setChildren(updatedChildren);
  };

  const handleBirthdayChange = (index, date) => {
    const updatedChildren = [...children];
    updatedChildren[index].birthday = date;
    setChildren(updatedChildren);
  };

  const handleAttendanceChange = (index, day) => {
    const updatedChildren = [...children];
    updatedChildren[index].attendanceDays[day] = !updatedChildren[index].attendanceDays[day];
    setChildren(updatedChildren);
  };

  const addAnotherChild = () => {
    setChildren([...children, {
      fullName: '',
      birthday: null,
      program: '',
      attendanceDays: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
      },
    }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parent Info:', parentInfo);
    console.log('Children:', children);
    // Here you can handle form submission, such as sending data to a backend
  };

  return (
    <div className="register-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <h2>Parent’s Information</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={parentInfo.fullName}
            onChange={handleParentChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={parentInfo.phoneNumber}
            onChange={handleParentChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={parentInfo.email}
            onChange={handleParentChange}
            placeholder="Enter email"
            required
          />
        </div>
        {children.map((child, index) => (
          <div key={index} className="child-info">
            <h2>Child’s Information</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={child.fullName}
                onChange={(e) => handleChildChange(index, e)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Birthday</label>
              <DatePicker
                selected={child.birthday}
                onChange={(date) => handleBirthdayChange(index, date)}
                placeholderText="Select a date"
                dateFormat="MM/dd/yyyy"
                required
              />
            </div>
            <div className="form-group">
              <label>Camp Program</label>
              <select
                name="program"
                value={child.program}
                onChange={(e) => handleChildChange(index, e)}
                required
              >
                <option value="">Select a Program</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <label>Attendance Days</label>
              <div className="attendance-days">
                {Object.keys(child.attendanceDays).map((day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      checked={child.attendanceDays[day]}
                      onChange={() => handleAttendanceChange(index, day)}
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={addAnotherChild} className="add-child-button">Add Another Child</button>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
