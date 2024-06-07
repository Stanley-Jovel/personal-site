import { XStack } from '@my/ui'
import { ProfileCard } from './ProfileCard'

export function HomeScreen() {
  return (
    <XStack jc="center" w="100%" h="100%" bg="$color.gray2Light">
      <ProfileCard />
    </XStack>
  )
}
