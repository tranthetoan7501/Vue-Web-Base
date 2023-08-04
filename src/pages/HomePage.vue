<template>
  <div class="container mx-auto">
    <SearchBar :onClickSearch="onSearch" />
    <div class="flex items-center justify-center pr-3">
      <MySelect
        :options="branchs"
        :name="$t('home_all_branchs')"
        :selected-value="filterBranch"
        @update:selectedValue="onBranchChange"
      />
      <MySelect
        :options="departmentList"
        :name="$t('home_all_departments')"
        :selected-value="filterDepartment"
        @update:selectedValue="onDepartmentChange"
      />
      <MySelect
        :options="positionList"
        :name="$t('home_all_positions')"
        :selected-value="filterPosition"
        @update:selectedValue="onPositionChange"
      />
    </div>
    <UersList :items="userList" :is-loading="isLoading" />
  </div>
</template>

<script lang="ts">
import { getContactList } from '@/api/userApi'
import MySelect from '@/components/Home/MySelect.vue'
import SearchBar from '@/components/Home/SearchBar.vue'
import UersList from '@/components/Home/UsersList.vue'
import type { User, ApiResponse, Branch, Department, Position } from '@/types/index'

export default {
  name: 'HomePage',
  components: { MySelect, SearchBar, UersList },
  data() {
    return {
      isLoading: true,
      users: [] as User[],
      branchs: [] as Branch[],
      filterBranch: -1 as number,
      departments: [] as Department[],
      filterDepartment: -1 as number,
      positions: [] as Position[],
      filterPosition: -1 as number,
      textSearch: '' as string
    }
  },
  async mounted() {
    try {
      const response: ApiResponse = await getContactList()
      console.log(response.data.Data)
      this.users = response.data.Data.users
        .sort((a, b) => a.PosittionId - b.PosittionId)
        .sort((a, b) => a.DepartmentId - b.DepartmentId)
        .sort((a, b) => a.UnitId - b.UnitId)
      this.branchs = response.data.Data.branchs
      this.departments = response.data.Data.departments
      this.positions = response.data.Data.positions
      this.isLoading = false
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    onSearch(value: string) {
      this.textSearch = value
      console.log(this.textSearch)
    },
    onBranchChange(newValue: number) {
      this.filterBranch = newValue
      this.filterDepartment = -1
      this.filterPosition = -1
      console.log(this.filterDepartment)
    },
    onDepartmentChange(newValue: number) {
      this.filterDepartment = newValue
      this.filterPosition = -1
    },
    onPositionChange(newValue: number) {
      this.filterPosition = newValue
    },
    removeVietnameseDiacritics(str: string | null) {
      return str
        ? str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
        : ''
    }
  },
  computed: {
    userList() {
      return this.users.filter((item) => {
        let unit: boolean = this.filterBranch == -1 ? true : item.UnitId == this.filterBranch
        let department: boolean =
          this.filterDepartment == -1 ? true : item.DepartmentId == this.filterDepartment
        let position: boolean =
          this.filterPosition == -1 ? true : item.PosittionId == this.filterPosition
        let hasChacracter: boolean =
          item.Name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          item.Email.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          this.removeVietnameseDiacritics(item.DepartmentName).includes(
            this.removeVietnameseDiacritics(this.textSearch)
          )
        return unit && department && position && hasChacracter
      })
    },
    departmentList() {
      return this.departments.filter((item) => {
        return item.ParentId == this.filterBranch
      })
    },
    positionList() {
      return this.positions.filter((item) => {
        return item.ParentId == this.filterDepartment
      })
    }
  }
}
</script>

<style></style>
