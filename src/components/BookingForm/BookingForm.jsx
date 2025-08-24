import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataPicker.css";
import s from "./BookingForm.module.css";
import Button from "../Button/Button.jsx";

export default function BookingForm() {
  const BookingValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.date()
      .typeError("Choose a date")
      .required("Required")
      .min(new Date(), "Past dates are not allowed."),
    comment: Yup.string().max(300, "Too Long!"),
  });

  return (
    <div className={s.container}>
      <h2 className={s.title}>Book your campervan now</h2>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          date: null,
          comment: "",
        }}
       validationSchema={BookingValidationSchema}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form className={s.form}>
            <div className={s.fieldsWrapper}>
              <div className={s.fieldGroup}>
                <Field
                  className={s.input}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <ErrorMessage
                  className={s.error}
                  name="name"
                  component="span"
                />
              </div>

              <div className={s.fieldGroup}>
                <Field
                  className={s.input}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <ErrorMessage
                  className={s.error}
                  name="email"
                  component="span"
                />
              </div>

              <div className={s.fieldGroup}>
                <div
                  className={`${s.dateWrapper} ${
                    touched.date && errors.date ? s.inputError : ""
                  }`}
                >
                  <DatePicker
                    selected={values.date}
                    onChange={(date) => setFieldValue("date", date)}
                    onBlur={() => setFieldTouched("date", true)}
                    placeholderText="Booking date*"
                    dateFormat="dd.MM.yyyy"
                    minDate={new Date()}
                    isClearable
                    className={s.input}
                    calendarClassName={s.calendar}
                    dayClassName={() => s.day}
                  />

                  <ErrorMessage
                    className={s.error}
                    name="date"
                    component="span"
                  />
                </div>
              </div>

              <div className={s.fieldGroup}>
                <Field
                  className={s.input}
                  as="textarea"
                  name="comment"
                  rows="5"
                  placeholder="Comment"
                />
                <ErrorMessage
                  className={s.error}
                  name="comment"
                  component="span"
                />
              </div>
            </div>
            <div className={s.wrapperBtn}>
              <Button type="submit">Send</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
