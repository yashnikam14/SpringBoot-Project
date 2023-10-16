package com.yashnikam.employeesystemapi.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.yashnikam.employeesystemapi.entity.EmpEntity;
import com.yashnikam.employeesystemapi.model.Employee;
import com.yashnikam.employeesystemapi.repository.EmpRepo;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmpRepo empRepo;

    public EmployeeServiceImpl(EmpRepo empRepo) {
        this.empRepo = empRepo;
    }

    @Override
    public Employee createEmp(Employee employee) {
        EmpEntity empEntity = new EmpEntity();

        BeanUtils.copyProperties(employee, empEntity);
        empRepo.save(empEntity);

        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmpEntity> employeeEntities = empRepo.findAll();

        List<Employee> employees = employeeEntities.stream().map(emp -> new Employee(
                emp.getId(),
                emp.getFName(),
                emp.getLname(),
                emp.getEmailId())).collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {

        EmpEntity employee = empRepo.findById(id).get();
        empRepo.delete(employee);
        return true;

    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmpEntity empEntity = empRepo.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(empEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmpEntity empEntity = empRepo.findById(id).get();
        empEntity.setFName(employee.getFName());
        empEntity.setLname(employee.getLname());
        empEntity.setEmailId((employee.getEmailId()));

        empRepo.save(empEntity);
        return employee;

    }

}
