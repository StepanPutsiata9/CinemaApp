import { useAuth } from '@/features/auth';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeTab() {
  const { user } = useAuth();
  return (
    <SafeAreaView>
      <Text>Home Tab</Text>
      <Text>{user?.exp}</Text>
    </SafeAreaView>
  );
}
