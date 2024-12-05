<script setup>
import PictureCard from '@/components/PictureCard/PictureCard.vue'
import FavoriteEmpty from '@/components/FavoriteEmpty/FavoriteEmpty.vue'

const imgData = [
  {
    id: 1,
    url: 'https://s3-alpha-sig.figma.com/img/ecf0/916e/d51272663c53b36e9723b8314d1a9a83?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juOOZBmC1Cl0pj80xp9iLoCmcqryAnknCkOSk53R06sSSZ8E2kmBu2BeTf4BzeSoFgDINny4~2YP~FUYBeLIxUW66X0PyvXcnQBQpwHrf~v2VFXybnYq3jDmYisw6z~i65ayxuNxwH3jFIK4O7JC9jzhhG2s5pjw3leETT0Cmvp71TvDE~mjv5vougphibQdBdfaaTUpfzq9Y-Yqe8n8zwJYPXii3YQx3z2eCcXe3Y4vBJf~QSGC8686Z8AgUHfNkkPqsPlcUc3dixMm8n9UwKePrtSnPE7plhOssNuyv5VTguB~AvqTZ~AwtQUn1K3hAX3vv6mXukUzPY-hct5DaQ__'
  },
  {
    id: 2,
    url: 'https://s3-alpha-sig.figma.com/img/ecf0/916e/d51272663c53b36e9723b8314d1a9a83?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juOOZBmC1Cl0pj80xp9iLoCmcqryAnknCkOSk53R06sSSZ8E2kmBu2BeTf4BzeSoFgDINny4~2YP~FUYBeLIxUW66X0PyvXcnQBQpwHrf~v2VFXybnYq3jDmYisw6z~i65ayxuNxwH3jFIK4O7JC9jzhhG2s5pjw3leETT0Cmvp71TvDE~mjv5vougphibQdBdfaaTUpfzq9Y-Yqe8n8zwJYPXii3YQx3z2eCcXe3Y4vBJf~QSGC8686Z8AgUHfNkkPqsPlcUc3dixMm8n9UwKePrtSnPE7plhOssNuyv5VTguB~AvqTZ~AwtQUn1K3hAX3vv6mXukUzPY-hct5DaQ__'
  },
  {
    id: 3,
    url: 'https://s3-alpha-sig.figma.com/img/ecf0/916e/d51272663c53b36e9723b8314d1a9a83?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juOOZBmC1Cl0pj80xp9iLoCmcqryAnknCkOSk53R06sSSZ8E2kmBu2BeTf4BzeSoFgDINny4~2YP~FUYBeLIxUW66X0PyvXcnQBQpwHrf~v2VFXybnYq3jDmYisw6z~i65ayxuNxwH3jFIK4O7JC9jzhhG2s5pjw3leETT0Cmvp71TvDE~mjv5vougphibQdBdfaaTUpfzq9Y-Yqe8n8zwJYPXii3YQx3z2eCcXe3Y4vBJf~QSGC8686Z8AgUHfNkkPqsPlcUc3dixMm8n9UwKePrtSnPE7plhOssNuyv5VTguB~AvqTZ~AwtQUn1K3hAX3vv6mXukUzPY-hct5DaQ__'
  },
  {
    id: 4,
    url: 'https://s3-alpha-sig.figma.com/img/ecf0/916e/d51272663c53b36e9723b8314d1a9a83?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juOOZBmC1Cl0pj80xp9iLoCmcqryAnknCkOSk53R06sSSZ8E2kmBu2BeTf4BzeSoFgDINny4~2YP~FUYBeLIxUW66X0PyvXcnQBQpwHrf~v2VFXybnYq3jDmYisw6z~i65ayxuNxwH3jFIK4O7JC9jzhhG2s5pjw3leETT0Cmvp71TvDE~mjv5vougphibQdBdfaaTUpfzq9Y-Yqe8n8zwJYPXii3YQx3z2eCcXe3Y4vBJf~QSGC8686Z8AgUHfNkkPqsPlcUc3dixMm8n9UwKePrtSnPE7plhOssNuyv5VTguB~AvqTZ~AwtQUn1K3hAX3vv6mXukUzPY-hct5DaQ__'
  },
  {
    id: 5,
    url: 'https://s3-alpha-sig.figma.com/img/ecf0/916e/d51272663c53b36e9723b8314d1a9a83?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juOOZBmC1Cl0pj80xp9iLoCmcqryAnknCkOSk53R06sSSZ8E2kmBu2BeTf4BzeSoFgDINny4~2YP~FUYBeLIxUW66X0PyvXcnQBQpwHrf~v2VFXybnYq3jDmYisw6z~i65ayxuNxwH3jFIK4O7JC9jzhhG2s5pjw3leETT0Cmvp71TvDE~mjv5vougphibQdBdfaaTUpfzq9Y-Yqe8n8zwJYPXii3YQx3z2eCcXe3Y4vBJf~QSGC8686Z8AgUHfNkkPqsPlcUc3dixMm8n9UwKePrtSnPE7plhOssNuyv5VTguB~AvqTZ~AwtQUn1K3hAX3vv6mXukUzPY-hct5DaQ__'
  },
  {
    id: 6,
    url: 'https://s3-alpha-sig.figma.com/img/ecf0/916e/d51272663c53b36e9723b8314d1a9a83?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juOOZBmC1Cl0pj80xp9iLoCmcqryAnknCkOSk53R06sSSZ8E2kmBu2BeTf4BzeSoFgDINny4~2YP~FUYBeLIxUW66X0PyvXcnQBQpwHrf~v2VFXybnYq3jDmYisw6z~i65ayxuNxwH3jFIK4O7JC9jzhhG2s5pjw3leETT0Cmvp71TvDE~mjv5vougphibQdBdfaaTUpfzq9Y-Yqe8n8zwJYPXii3YQx3z2eCcXe3Y4vBJf~QSGC8686Z8AgUHfNkkPqsPlcUc3dixMm8n9UwKePrtSnPE7plhOssNuyv5VTguB~AvqTZ~AwtQUn1K3hAX3vv6mXukUzPY-hct5DaQ__'
  },
  {
    id: 7,
    url: 'https://s3-alpha-sig.figma.com/img/ecf0/916e/d51272663c53b36e9723b8314d1a9a83?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juOOZBmC1Cl0pj80xp9iLoCmcqryAnknCkOSk53R06sSSZ8E2kmBu2BeTf4BzeSoFgDINny4~2YP~FUYBeLIxUW66X0PyvXcnQBQpwHrf~v2VFXybnYq3jDmYisw6z~i65ayxuNxwH3jFIK4O7JC9jzhhG2s5pjw3leETT0Cmvp71TvDE~mjv5vougphibQdBdfaaTUpfzq9Y-Yqe8n8zwJYPXii3YQx3z2eCcXe3Y4vBJf~QSGC8686Z8AgUHfNkkPqsPlcUc3dixMm8n9UwKePrtSnPE7plhOssNuyv5VTguB~AvqTZ~AwtQUn1K3hAX3vv6mXukUzPY-hct5DaQ__'
  }
]
</script>

<template>
  <div
    class="grid grid-cols-4 max-3xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-[50px] my-10"
  >
    <template v-if="imgData.length !== 0">
      <PictureCard :url="imgData" />
    </template>
    <template v-else>
      <FavoriteEmpty />
    </template>
  </div>
</template>
