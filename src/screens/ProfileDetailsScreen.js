// import React from 'react';
// import { View,Text } from 'react-native';

// const ProfileDetailsScreen=()=>{
//     return(
//     <View>
//         <Text>Dummy Screen</Text>
//     </View>
//     )
// }
// export default ProfileDetailsScreen;
// import React from 'react';
// import { View,Text } from 'react-native';

// const AccountScreen=()=>{
//     return(
//     <View>
//         <Text>Dummy Screen</Text>
//     </View>
//     )
// }
// export default AccountScreen;
// Import React
import React, {useState, useEffect} from 'react';
import storage from '@react-native-firebase/storage';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Alert,
  Modal,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
const ProfileDetailsScreen = ({navigation}) => {
  const [filePath, setFilePath] = useState({});
  // const [uri, setUri] = useState('file:///data/user/0/com.rnpractise/cache/rn_image_picker_lib_temp_ecf02629-5987-497f-b672-c5106486b0fe.jpg');
  const [uri, setUri] = useState('')
  const [fileName, setFileName] = useState('');
  const [showBottomSheet, setBottomSheet] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [firstNameShow, setFirstNamShow] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameShow, setLastNamShow] = useState(false);
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumberShow, setPhoneNumberShow] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailShow, setEmailShow] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [addressShow, setAddressShow] = useState(false);
  const [addressError, setAddressError] = useState('');
  const [dobShow, setDobShow] = useState(false);
  const [dobError, setDobError] = useState('');
  const [genderShow, setGenderShow] = useState(false);
  const [genderError, setGenderError] = useState('');
  const [streetError, setStreetError] = useState('');
  const [streetShow, setStreetShow] = useState(false);
  const [zipCodeError, setZipCodeError] = useState('');
  const [zipCodeShow, setZipCodeShow] = useState(false);
  const [cityShow, setCityShow] = useState(false);
  const [cityError, setCityError] = useState('');
  const [CountryShow, setCountryShow] = useState(false);
  const [countryError, setCountryError] = useState('');
  const [noError, setNoError] = useState(false);

 useEffect(()=>{
    getImageUri();
 },[])
 
const getImageUri=async()=>{
    let imageUri = await AsyncStorage.getItem('ImageUri');
    setUri(imageUri);
    console.log("image uri is>>",imageUri);
}
 
  const handleValidation = async() => {
    if (firstName == '') {
      setFirstNameError('firstname cannot be empty');
      setFirstNamShow(true);
    }

    if (lastName == '') {
      setLastNameError('lastname cannot be empty');
      setLastNamShow(true);
    }
    if (phoneNumber == '') {
      setPhoneNumberError('phonenumber cannot be empty');
      setPhoneNumberShow(true);
    }
    if (emailAddress == '') {
      setEmailError('emailaddress cannot be empty');
      setEmailShow(true);
    }
    if (dob == '') {
      setDobError('DOB cannot be empty');
      setDobShow(true);
    }
    if (gender == '') {
      setGenderError('gender cannot be empty');
      setGenderShow(true);
    }
    if (address == '') {
      setAddressError('address cannot be empty');
      setAddressShow(true);
    }
    if (street == '') {
      setStreetError('street cannot be empty');
      setStreetShow(true);
    }
    if (zipCode == '') {
      setZipCodeError('zipcode cannot be empty');
      setZipCodeShow(true);
    }

    if (city == '') {
      setCityError('city cannot be empty');
      setCityShow(true);
    }
    if (country == '') {
      setCountryError('country cannot be empty');
      setCountryShow(true);
    } else if (uri == '') {
      Alert.alert('Profile photo is required to upload');
      setNoError(true);
    }
    if (
      firstName != '' &&
      lastName != '' &&
      phoneNumber != '' &&
      dob != '' &&
      gender != '' &&
      emailAddress != '' &&
      address != '' &&
      street != '' &&
      zipCode != '' &&
      city != '' &&
      country != '' &&
      uri != ''
    ) {
      console.log('noerror');
      // await AsyncStorage.setItem(
      //   'userNameWithEmail',
      //   firstName+" "+lastName,
      // );
      navigation.navigate('FirebaseLogin');
    }
  };
 


  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>Account Details</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setBottomSheet(true);
          }}
          style={{}}>
          <Image
            source={uri ? {uri: uri} : require('../assets/pngImages/photo.jpg')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          flex: 0.7,
          // backgroundColor:"pink"
        }}>
        <View
          style={
            {
              // flex:0.9,
              // backgroundColor:"pink"
            }
          }>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'blue',
              marginBottom: '2%',
            }}>
            <TextInput
              label="First Name"
              value={firstName}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setFirstName(text);
                setFirstNamShow(false);
              }}
              style={{
                color: '#4D4848',
              width: '90%',
               height: 48,
              justifyContent: 'center',
              alignSelf: 'center',
                fontSize:13,
                fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {firstNameShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {firstNameError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'yellow',
              marginBottom: '2%',
            }}>
            <TextInput
              label={"Last Name"}
              value={lastName}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setLastName(text);
                setLastNamShow(false);
              }}
              style={{
                color: '#4D4848',
                width: '90%',
                 height: 48,
                justifyContent: 'center',
                alignSelf: 'center',
                  fontSize:13,
                  fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {lastNameShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {lastNameError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'pink',
              marginBottom: '2%',
            }}>
            <TextInput
              label="Phone Number"
              value={phoneNumber}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setphoneNumber(text);
                setPhoneNumberShow(false);
              }}
              style={{
                color: '#4D4848',
              width: '90%',
               height: 48,
              justifyContent: 'center',
              alignSelf: 'center',
                fontSize:13,
                fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {phoneNumberShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {phoneNumberError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'pink',
              marginBottom: '2%',
            }}>
            <TextInput
              label="DOB"
              value={dob}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setDob(text);
                setDobShow(false);
              }}
              style={{
                color: '#4D4848',
                width: '90%',
                 height: 48,
                justifyContent: 'center',
                alignSelf: 'center',
                  fontSize:13,
                  fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {dobShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {dobError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'pink',
              marginBottom: '2%',
            }}>
            <TextInput
              label="Gender"
              value={gender}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setGender(text);
                setGenderShow(false);
              }}
              style={{
                color: '#4D4848',
                width: '90%',
                 height: 48,
                justifyContent: 'center',
                alignSelf: 'center',
                  fontSize:13,
                  fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {genderShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {genderError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              marginBottom: '2%',
              // backgroundColor: 'pink',
            }}>
            <TextInput
              label="Email Address"
              value={emailAddress}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setEmailAddress(text);
                setEmailShow(false);
              }}
              style={{
                color: '#4D4848',
                width: '90%',
                 height: 48,
                justifyContent: 'center',
                alignSelf: 'center',
                  fontSize:13,
                  fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {emailShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {emailError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'pink',
              marginBottom: '2%',
            }}>
            <TextInput
              label="Address"
              value={address}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setAddress(text);
                setAddressShow(false);
              }}
              style={{
                color: '#4D4848',
                width: '90%',
                 height: 48,
                justifyContent: 'center',
                alignSelf: 'center',
                  fontSize:13,
                  fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {addressShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {addressError}
              </Text>
            ) : null}
          </View>
          <Text
            style={{
              marginLeft: '5%',
              marginVertical: '4%',
              fontWeight: '700',
              fontSize: 20,
            }}>
            Address
          </Text>

          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'pink',
              marginBottom: '2%',
            }}>
            <TextInput
              label="Street"
              value={street}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setStreet(text);
                setStreetShow(false);
              }}
              style={{
                color: '#4D4848',
                width: '90%',
                 height: 48,
                justifyContent: 'center',
                alignSelf: 'center',
                  fontSize:13,
                  fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {streetShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {streetError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'pink',
              marginBottom: '2%',
            }}>
            <TextInput
              label="Zip code"
              value={zipCode}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setZipCode(text);
                setZipCodeShow(false);
              }}
              style={{
                color: '#4D4848',
              width: '90%',
               height: 48,
              justifyContent: 'center',
              alignSelf: 'center',
                fontSize:13,
                fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {zipCodeShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {zipCodeError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'blue',
              marginBottom: '2%',
            }}>
            <TextInput
              label="City"
              value={city}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setCity(text);
                setCityShow(false);
              }}
              style={{
                color: '#4D4848',
              width: '90%',
               height: 48,
              justifyContent: 'center',
              alignSelf: 'center',
                fontSize:13,
                fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {cityShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {cityError}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.9,
              // backgroundColor: 'yellow',
              marginBottom: '2%',
            }}>
            <TextInput
              label="Country"
              value={country}
              mode={'outlined'}
              placeholderTextColor="#AFAFAF"
              onChangeText={text => {
                setCountry(text);
                setCountryShow(false);
              }}
              style={{
                color: '#4D4848',
              width: '90%',
               height: 48,
              justifyContent: 'center',
              alignSelf: 'center',
                fontSize:13,
                fontWeight:"300"
              }}
              outlineColor={'#AFAFAF'}
              theme={{
                colors: {
                  primary: '#B5B5B5',
                  text: '#4D4848',
                  background: '#F4F4F4',

                  //   ? '#F4F4F4'
                  //   '#FFFFFF',
                  placeholder: '#989898',
                },
              }}
            />
            {CountryShow ? (
              <Text
                style={{
                  color: 'red',
                  marginLeft: '6%',
                  fontSize: 12,
                  // marginLeft: ,
                  // alignSelf: 'center',
                }}>
                {countryError}
              </Text>
            ) : null}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 0.15,
          // backgroundColor:"pink"
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('FirebaseLogin');
            handleValidation();
          }}
          style={{
            width: '90%',
            height: '85%',
            // backgroundColor: '#0379FF',
            backgroundColor: 'green',
            marginHorizontal: '0%',
            borderRadius: 10,
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 0.7,
              //  backgroundColor:"red",
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                fontWeight: '500',
              }}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    
      {/* <Modal
        animationType={'slide'}
        visible={showBottomSheet}
        transparent={true}
        // onRequestClose={toggleUpBottomSheet}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.closeView}
          onPress={() => {
            setBottomSheet(false);
          }}>
          <View
            style={[
              styles.modalContainer,
              // {backgroundColor:"pink"},
            ]}>
            <View
              style={[
                styles.mainContainerModal2,
                // {backgroundColor: colors.PopUpColor},
                // {backgroundColor: "red"},
              ]}>
              <TouchableOpacity
                onPress={() => {
                  captureImage('photo');
                }}>
                <View
                  style={{
                    marginLeft: '4%',
                    marginVertical: '5%',
                    flexDirection: 'row',
                  }}>
                  <AntDesign name={'camera'} size={23} />
                  <Text
                    style={{color: 'black', fontSize: 16, marginLeft: '6%'}}>
                    Capture image from Camera
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => chooseFile('photo')}>
                <View
                  style={{
                    marginLeft: '4%',
                    marginVertical: '5%',
                    flexDirection: 'row',
                  }}>
                  <MaterialCommunityIcons name={'view-gallery'} size={23} />
                  <Text
                    style={{color: 'black', fontSize: 16, marginLeft: '6%'}}>
                    Choose image from gallery
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal> */}
    </SafeAreaView>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    padding: 10,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 130,
    height: 130,
    margin: 5,
    borderRadius: 70,
  },
  closeView: {
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
    // backgroundColor:"yellow"
  },

  mainContainerModal2: {
    backgroundColor: '#ffff',
    width: '100%',
    height: '25%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: '1%',
    // maxHeight: theme.palette.height,
    borderBottomColor: '#F8F8F9',
    borderBottomWidth: 1.5,
  },
});
