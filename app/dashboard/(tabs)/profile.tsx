import { View, Text, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc'
export default function Profile() {
  return (
    <View style={tw `flex-1 mt-10 px-5 bg-white`}>
       <Text style={tw`text-2xl text-center mb-3 font-bold`} >Profile</Text>
       <View style={tw `flex-col items-center gap-y-1`}>
       <Image
              source={require('../../../assets/home.png')} 
              style={tw`w-12 h-12`} 
            />
            <Text style={tw `text-2xl font-medium`}>Divine Ikemma</Text>
            <Text style={tw `text-2xl font-medium`}>@Divkemma</Text>

       </View>
       <View style={tw `flex-col gap-y-3`}>
        <View style={tw `flex-row justify-between`}>
          <View>
            <Text style={tw `text-xl font-bold`}>Full Name</Text>
            <Text style={tw `text-sm `}>Divine Ikemma</Text>
          </View>
          <Ionicons name="pencil" size={24} color="black" />
        </View>
        <View style={tw `flex-row justify-between`}>
          <View>
            <Text style={tw `text-xl font-bold`}>Phone Number</Text>
            <Text style={tw `text-sm `}>08737373729</Text>
          </View>
          <Ionicons name="pencil" size={24} color="black" />
        </View>
        <View style={tw `flex-row justify-between`}>
          <View>
            <Text style={tw `text-xl font-bold`}>Email</Text>
            <Text style={tw `text-sm `}>divineikemma@gmail.com</Text>
          </View>
          <Ionicons name="pencil" size={24} color="black" />
        </View>
        <View style={tw `flex-row justify-between`}>
          <View>
            <Text style={tw `text-xl font-bold`}>Gender</Text>
            <Text style={tw `text-sm `}>Female</Text>
          </View>
          <Ionicons name="pencil" size={24} color="black" />
        </View>
        <View>
            <Text style={tw `text-xl font-bold`}>Settings</Text>
            <Text style={tw `text-sm `}>control your notification and security settings</Text>
          </View>
        <View>
            <Text style={tw `text-xl font-bold`}>Get Help</Text>
            <Text style={tw `text-sm `}>Get support or send feedback</Text>
          </View>
          <View style={tw `flex-row gap-x-3 items-center border-b`}>
          <Image
              source={require('../../../assets/instagram.png')} 
              style={tw`w-12 h-12 mb-3`} 
            />
            <Text >
              Follow us on Instagram
            </Text>
          </View>
          <View style={tw `flex-row gap-x-3 items-center border-b`}>
          <Image
              source={require('../../../assets/youtube.png')} 
              style={tw`w-12 h-12 mb-3`} 
            />
            <Text >
              Follow us on Youtube
            </Text>
          </View>
          <View style={tw `flex-row gap-x-3 items-center border-b`}>
          <Image
              source={require('../../../assets/xlogo.png')} 
              style={tw`w-12 h-12 mb-3`} 
            />
            <Text >
              Follow us on Twitter
            </Text>
          </View>
       </View> 

    </View>
  )
}