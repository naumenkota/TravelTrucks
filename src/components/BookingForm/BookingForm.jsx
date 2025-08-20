import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import s from "./BookingForm.module.css";

export default function BookingForm() {
   
const BookingValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),

        
});
    
    
  const onSubmit = (values, actions) => {
  const newBooking= {
    name: values.name,
      email: values.email,
      date: values.date,
     comment: values.comment
      };
      

    return (
         <Formik
            initialValues={{
            name: "",
            email: "",
            date: "",
            comment: ""
        }}
            onSubmit={onSubmit}
            validationSchema={BookingValidationSchema}>
            
            <Form className={s.form}> 
                <div className={s.fieldGroup}>   
                <Field className={s.input} type="text" name="name"  placeholder="Name*"/>
                    <ErrorMessage className={s.error} name="name" component="span" />
                </div>

                <div className={s.fieldGroup}> 
                
                <Field className={s.input} type="email" name="email"  placeholder="Email*"/>
                <ErrorMessage className={s.error} name="email" component="span" />
                </div>
         
                
                 <div className={s.fieldGroup}>   
                <Field className={s.input} as="textarea" name="comment" rows="5"  placeholder="Comment" />
                <ErrorMessage className={s.error} name="comment" component="span" />
                    
 </div>
                <Button>Send</Button>
      </Form>
    </Formik>
    )
}