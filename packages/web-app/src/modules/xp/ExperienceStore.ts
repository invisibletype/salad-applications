import { action, observable, computed, flow } from 'mobx'
import { Level } from './models/Level'
import { defaultLevels } from './models/defaultLevels'
import { AxiosInstance } from 'axios'
import { RootStore } from '../../Store'

export class ExperienceStore {
  @observable
  public currentXp: number = 0

  @observable
  public levels: Level[] = []

  @computed get currentLevel(): Level {
    let matchingLevel = this.levels.find(l => {
      return this.currentXp >= l.minXp && this.currentXp <= l.maxXp
    })

    if (matchingLevel == undefined) matchingLevel = this.levels[this.levels.length - 1]

    return matchingLevel
  }

  @computed get currentPercentComplete(): number {
    const level = this.currentLevel
    let totalRange = level.maxXp - level.minXp
    let delta = this.currentXp - level.minXp
    return delta / totalRange
  }

  constructor(private readonly store: RootStore, readonly axios: AxiosInstance) {
    this.loadInitialLevels()
  }

  @action loadInitialLevels() {
    this.levels = defaultLevels
  }

  @action
  updateXp(newXp: number) {
    this.currentXp = newXp
  }

  @action.bound
  refreshXp = flow(function*(this: ExperienceStore) {
    try {
      let res = yield this.axios.get('get-xp')

      let newXp = res.data.xp

      this.updateXp(newXp)

      console.log('XP:' + newXp)
    } catch (err) {
      this.store.analytics.captureException(err)
    }
  })
}
