import { ref, onBeforeMount } from 'vue';
import {DayEntry} from "~/src/models/DayEntry";

export default function useSportStatsManger() {
    const sportStats = ref<DayEntry[]>([]);

    // Create a new SportStats
    async function createSportStats(newStats: DayEntry): Promise<void> {
        await $fetch('/api/sportstats', {
            method: 'POST',
            body: newStats,
        });
    }

    // Reload all SportStats
    async function reloadSportStats(): Promise<void> {
        sportStats.value = await $fetch<DayEntry[]>('/api/sportstats');
    }

    // Update an existing SportStats
    async function updateSportStats(updatedStats: DayEntry): Promise<void> {
        await $fetch(`/api/sportstats/${updatedStats.id}`, {
            method: 'PUT',
            body: updatedStats,
        });
    }

    // Delete a SportStats
    async function deleteSportStats(id: string): Promise<void> {
        await $fetch(`/api/sportstats/${id}`, {
            method: 'DELETE',
        });
    }

    // Vue lifecycle hook to reload SportStats before component mount
    onBeforeMount(async () => {
        await reloadSportStats();
    });

    return {
        sportStats,
        createSportStats,
        reloadSportStats,
        updateSportStats,
        deleteSportStats,
    };
}