import MapComponent from "../../components/contact/Map";
import Text from "../../components/global/Text";
import Card from "../../components/global/Card";
import FormGroup from "../../components/global/FormGroup";
import CustomButton from "../../components/global/CustomButton";

const Contact = () => {
  return (
    <>
      <MapComponent />
      <div className="container py-4">
        <div className="items-center justify-center text-center p-5 w-full lg:w-2/3 mx-auto">
          <Text className="md:text-5xl text-3xl font-bold">Contact Us</Text>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="p-4" ternary>
              <form>
                <div className="grid gap-4">
                  <FormGroup label="Name" type="text" id="name" name="name" />
                  <FormGroup label="Email" type="email" id="email" name="email" />
                  <FormGroup label="Message" type="text" id="message" name="message" textarea />
                  <CustomButton type="submit" primary large text="Submit" />
                </div>
              </form>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <div>
              <Card className="p-4" primary>
                <div className="grid gap-y-6">
                  <div>
                    <Text className="text-white dark:text-white text-xl font-bold">Contact Info</Text>
                  </div>
                  <div>
                    <Text className="text-white dark:text-white text-lg">Address:</Text>
                    <Text className="text-white dark:text-white text-lg">1234 Main Street, Anytown, USA</Text>
                  </div>
                  <div>
                    <Text className="text-white dark:text-white text-lg">Phone:</Text>
                    <Text className="text-white dark:text-white text-lg">123-456-7890</Text>
                  </div>
                </div>
              </Card>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
